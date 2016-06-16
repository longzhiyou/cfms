/**
 * 配置模块，主要是路由相关.
 *
 * Configures the UI-Router states and their associated URL routes and views
 * Also adds "state-change" reporting for debugging during development
 *
 * Created by longzhiyou on 2016-06-12.
 */
(function(angular){
    "use strict";
    angular.module("app").config(configureStates);

    /* @ngInject */
    function configureStates($stateProvider) {

        $stateProvider
            .state('app.dashboard',
                {
                    url: '/dashboard',
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'dashboardController',
                    controllerAs: 'vm',
                    ncyBreadcrumb: {
                        parent:'app',
                        label: 'Dashboard page'

                    },
                    resolve: {
                        loadPlugin: function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    files: ['app/dashboard/dashboardController.js']
                                }
                            ]);
                        }
                    }
                })
            .state('app.widgets',
                {
                    url: '/widgets',
                    templateUrl: 'app/dashboard/widgets/widgets.html',
                    controller: 'dashboardController',
                    controllerAs: 'vm',
                    ncyBreadcrumb: {
                        parent:'app',
                        label: 'Widgets page'

                    },
                    resolve: {
                        loadPlugin: function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    files: ['app/common/infoBoxDirective.js']
                                }
                            ]);
                        }
                    }
                })
        ;
  
    }

})(this.angular);