/*
 * Configures the UI-Router states and their associated URL routes and views
 * Also adds "state-change" reporting for debugging during development
 */
(function(  ) {
    'use strict';
    
    angular.module("app")
        .config(['$httpProvider','$stateProvider', '$urlRouterProvider','$compileProvider','$locationProvider','$translateProvider', configureStates]);
    /////////////////////
    function configureStates( $httpProvider,$stateProvider, $urlRouterProvider,$compileProvider,$locationProvider,$translateProvider) {


        $compileProvider.debugInfoEnabled(false);
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/login');       // Return to the login ordering screen


        var login =  {
            name:'login',
            url: '/login',
            templateUrl: 'js/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/login/login.v2.css','js/login/login.controller.js']
                        }
                    ]);
                }
            }};

        var app =    {
            name:'app',
            abstract: true,
            url: '',
            templateUrl: 'js/dashboard/dashboard.html',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/headers/header-default.css','js/dashboard/header.controller.js']
                        }
                    ]);
                }
            }
        };
        var states = [login   ,app];
        for(var index=0;    index<states.length;   index++){
            $stateProvider.state(states[index]);
        }


        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


    }

}());