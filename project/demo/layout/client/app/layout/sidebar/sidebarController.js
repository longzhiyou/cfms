
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

        /**
         * 父节点：state是空，fa-angle-left 不能添加
         * [2016-06-15 add by longzhiyou]
         */
        $scope.menus= [{
            "class": "fa fa-dashboard",
            "state": "app.dashboard",
            "text": "Dashboard-1"
        }, {
            "class": "fa fa-bar-chart-o",
            "text": "Charts-1",
            "children": [{
                "class": "fa fa-dashboard",
                // "state": "app.business",
                "text": "Charts level1 c1",
                "children": [{
                    "class": "fa fa-dashboard",
                    "state": "app.business",
                    "text": "Charts level2 c1"

                }]

            },{
                "class": "fa fa-dashboard",
                "state": "app.dashboard",
                "text": "Charts  level1 c2"

            }]
        }, {
            "class": "fa fa-envelope",
            "state": "app.business",
            "text": "Mailbox-1",
            "badge": {
                "color": "green",
                "text": "new"
            }
        }];



    }

})(this.angular);
