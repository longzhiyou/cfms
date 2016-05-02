(function (angular) {
    angular.module('app').factory('auth', ['$rootScope', '$http', '$location', '$state', factory]);

    function factory($rootScope, $http, $location, $state) {

        var auth = {
            authenticated: true,
            init: init,
            authenticate: authenticate,
            clear: clear
        };
        return auth;
        //////////////

        function init() {

            auth.authenticate({}, function (authenticated) {
                if (authenticated) {
                    //$location.path(auth.path);
                    return authenticated;
                }
            })
        }

        function authenticate(credentials, callback) {

            auth.authenticated = true;

            // var headers = credentials && credentials.username ? {
            // 	authorization : "Basic "
            // 	+ btoa(credentials.username + ":"
            // 		+ credentials.password)
            // } : {};
            //
            // $http.get('user', {
            // 	headers : headers
            // }).success(function(data) {
            // 	//if (data.name) {
            // 	//	auth.authenticated = true;
            // 	//} else {
            // 	//	auth.authenticated = false;
            // 	//}
            // 	auth.authenticated = !!data.name;
            // 	callback && callback(auth.authenticated);
            // }).error(function() {
            // 	auth.authenticated = true;
            // 	callback && callback(true);
            // });

        }

        function clear() {

            $location.path(auth.loginPath);
            auth.authenticated = false;
            $http.post(auth.logoutPath, {}).success(function () {
                console.log("Logout succeeded");
            }).error(function (data) {
                console.log("Logout failed");
            });

        }


    }


})(this.angular);