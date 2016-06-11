(function( angular  ) {
	angular.module('app').factory('auth',['$rootScope', '$http', '$location','$state',factory]);

		function factory ($rootScope, $http, $location,$state) {

			var auth = {
				authenticated : false,
				init:init,
				authenticate: authenticate,
				clear:clear
			};
			return auth;
			//////////////

			function init(){

				auth.authenticate({}, function(authenticated) {
					if (authenticated) {
						//$location.path(auth.path);
						return authenticated;
					}
				})
			}

			function authenticate(credentials, callback){


                $http({
                    method: 'POST',
                    url: 'http://localhost:8089/login',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param(credentials)
                }).success(function(data) {
                    //if (data.name) {
                    //	auth.authenticated = true;
                    //} else {
                    //	auth.authenticated = false;
                    //}
                    auth.authenticated = !!data.username;
                    callback && callback(auth.authenticated);
                }).error(function(data) {
                    auth.authenticated = false;
                    callback && callback(false);
                });



            }

			function clear(){

				$location.path(auth.loginPath);
				auth.authenticated = false;
				$http.post(auth.logoutPath, {}).success(function() {
					console.log("Logout succeeded");
				}).error(function(data) {
					console.log("Logout failed");
				});

			}


		}


})( this.angular );