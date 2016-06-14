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

        $scope.menus= [{
            "class": "fa fa-dashboard",
            "state": "app.dashboard",
            "text": "Dashboard"
        }, {
            "class": "fa fa-bar-chart-o",
            "text": "Charts",
            "children": [{
                "class": "fa fa-dashboard",
                "state": "app.business",
                "text": "Morris"

            },{
                "class": "fa fa-dashboard",
                // "state": "app.dashboard",
                "text": "Dashboard-3",
                "children": [{
                    "class": "fa fa-dashboard",
                    "state": "app.business",
                    "text": "Morris-3"

                }]
            }]
        }, {
            "class": "fa fa-envelope",
            "state": "app.home",
            "text": "Mailbox",
            "badge": {
                "color": "green",
                "text": "new"
            }
        }];


    }
    
})(this.angular);
