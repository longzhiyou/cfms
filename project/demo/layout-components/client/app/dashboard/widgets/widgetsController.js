/**
 * Created by longzhiyou on 2016-06-12.
 */

(function(angular){
    "use strict";
    angular.module('app')
        .controller('widgetsController', WidgetsController);
    /* @ngInject */
    function WidgetsController($state,$scope){
        var vm = this;
        $scope.message = "Message scope";
        vm.message = "Message vm";
        vm.go = go;
        function go() {
            $state.go('app.business');
        }

    }

})(this.angular);