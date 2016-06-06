/*
 * Configures the UI-Router states and their associated URL routes and views
 * Also adds "state-change" reporting for debugging during development
 */
(function () {
    'use strict';

    angular.module("app")
        .config(configureStates);

    /////////////////////
    /* @ngInject */
    function configureStates($httpProvider,
                             $stateProvider,
                             $urlRouterProvider,
                             $compileProvider,
                             $locationProvider,
                             $translateProvider,
                             logEnhancerProvider,
                             calendarConfig) {

        "ngInject";// just like you would "use strict". This must be at the beginning of your function.

        $httpProvider.interceptors.push('httpInterceptor');

        logEnhancerProvider.datetimePattern = 'YYYY-MM-DD hh:mm:ss a';
        calendarConfig.dateFormatter = 'moment'; // use moment instead of angular for formatting dates

        //$locationProvider.html5Mode({
        //    enabled: true,
        //        requireBase: false
        //    });

        //翻译会放到这里
        $translateProvider.translations('en', {
                partyId: 'partyId',
                name: 'Name',
                gender: 'gender',
                height: 'height',
                company: 'Company'
            })
            .translations('zh', {
                partyId: '编号',
                name: '姓名',
                gender: '性别',
                height: '身高',
                company: '公司',
                query: '查询'
            });

        $translateProvider.preferredLanguage('zh');

        $compileProvider.debugInfoEnabled(false);
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/login');       // Return to the login ordering screen


        var login = {
            name: 'login',
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['app/login/login.v2.css', 'app/login/login.controller.js']
                        }
                    ]);
                }
            }
        };

        var app = {
            name: 'app',
            abstract: true,
            url: '',
            templateUrl: 'app/dashboard/dashboard.html',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: [ 'assets/css/headers/header-default.css', 'app/dashboard/header.controller.js']
                        }
                    ]);
                }
            }
        };
        var states = [login, app];
        for (var index = 0; index < states.length; index++) {
            $stateProvider.state(states[index]);
        }


        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        //Disabling Debug Data
        //myApp.config(['$compileProvider', function ($compileProvider) {
        //    $compileProvider.debugInfoEnabled(false);
        //}]);


    }

}());