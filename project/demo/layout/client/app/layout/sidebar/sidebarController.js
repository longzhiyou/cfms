
/**
 * Created by longzhiyou on 2016-06-15.
 */

(function(angular){
    "use strict";
    angular.module('app')
        .controller('sidebarController', SidebarController);
    /* @ngInject */
    function SidebarController($scope){
        var vm = this;

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
                "text": "Charts child1"

            },{
                "class": "fa fa-dashboard",
                // "state": "app.dashboard",
                "text": "Charts child2",
                "children": [{
                    "class": "fa fa-dashboard",
                    "state": "app.dashboard",
                    "text": "Morris-3"

                }]
            }]
        }, {
            "class": "fa fa-envelope",
            "state": "app.business",
            "text": "Mailbox",
            "badge": {
                "color": "green",
                "text": "new"
            }
        }];



    }

})(this.angular);
