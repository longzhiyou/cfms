/*
 * Configures the UI-Router states and their associated URL routes and views
 * Also adds "state-change" reporting for debugging during development
 */
(function () {
    'use strict';

    angular.module("app.ui")
        .config(['$stateProvider', configureStates]);

    /////////////////////
    function configureStates($stateProvider) {
        $stateProvider
            .state('app.ui',
                {
                    url: '/ui',
                    templateUrl: 'app/ui/ui.html'
                })
            .state('app.profile',
                {
                    url: '/ui/profile',
                    templateUrl: 'app/ui/profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm',
                    resolve: {
                        loadPlugin: function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    files: ['app/ui/profile.controller.js']
                                }
                            ]);
                        }
                    }
                })
            .state('app.FontAwesome',
                {
                    url: '/ui/FontAwesome',
                    templateUrl: 'app/ui/FontAwesome.html'
                })
            .state('app.TestTable',
                {
                    url: '/ui/TestTable',
                    templateUrl: 'app/ui/TestTable.html',
                    controller: 'TestGridController',
                    controllerAs: 'vm',
                    resolve: {
                        loadPlugin: function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    files: ['app/ui/testTable.controller.js']
                                }
                            ]);
                        }
                    }
                })
        ;

    }

}());

