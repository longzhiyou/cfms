/**
 * Created by longzhiyou on 2016-06-12.
 */

(function(angular){
    "use strict";
    angular.module('app')
        .controller('loginController', LoginController);
    /* @ngInject */
    function LoginController($state){

        var vm = this;
        vm.login = login;
        function login() {
            $state.go('app.dashboard');
        }

    }

})(this.angular);