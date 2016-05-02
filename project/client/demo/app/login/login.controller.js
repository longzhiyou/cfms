(function (angular) {
    'use strict';

    angular.module("app").controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'auth'];

    /////////////////////
    function LoginController($state, auth) {

        var vm = this;
        vm.error = false;
        vm.login = login;
        //vm.logout = auth.clear;
        vm.authenticated = authenticated;
        vm.credentials = {};

        vm.images = [
            'images/bg/18.jpg',
            'images/bg/19.jpg',
            'images/bg/7.jpg'
        ];


        function authenticated() {
            auth.authenticated = true;
            return auth.authenticated;
        }

        function login() {

            if (authenticated) {
                console.log("Login succeeded");
                vm.error = false;

                $state.go('app.profile');
            } else {
                console.log("Login failed");
                vm.error = true;
            }

            // auth.authenticate(vm.credentials, function(authenticated) {
            // 	if (authenticated) {
            // 		console.log("Login succeeded");
            // 		vm.error = false;
            //
            //        $state.go('app.profile');
            // 	} else {
            // 		console.log("Login failed");
            // 		vm.error = true;
            // 	}
            // })
        }


    }

}(this.angular));

