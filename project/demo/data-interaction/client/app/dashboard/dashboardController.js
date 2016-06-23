/**
 * Created by longzhiyou on 2016-06-12.
 */

(function(angular){
    "use strict";
    angular.module('app')
        .controller('dashboardController', DashboardController);
    /* @ngInject */
    function DashboardController($state){
        var vm = this;
        vm.go = go;
        function go() {
            $state.go('app.business');
        }

    }

})(this.angular);