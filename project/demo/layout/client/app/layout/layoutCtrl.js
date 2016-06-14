/**
 * @ngdoc controller
 * @name app:layoutCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */

(function(angular){
    "use strict";
    angular.module('app')
        .controller('layoutController', LayoutController);
    /* @ngInject */
    function LayoutController($scope){
        var vm = this;
        // 很重要
        $.AdminLTE.layout.fix();
        
    }
    
})(this.angular);
