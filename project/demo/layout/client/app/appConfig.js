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
    angular.module("app").config(AppConfig);

    /* @ngInject */
    function AppConfig( $httpProvider,
                              $stateProvider,
                              $urlRouterProvider,
                              $ocLazyLoadProvider,
                              $locationProvider
                              ) {

        $urlRouterProvider.otherwise('/login');       // Return to the login ordering screen
        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: false
        });

        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('!');

        // $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        /**
         * CORS请求默认不发送Cookie和HTTP认证信息。
         * 如果要把Cookie发到服务器，一方面要服务器同意，指定Access-Control-Allow-Credentials字段。
         * 另一方面，开发者必须在AJAX请求中打开withCredentials属性.
         *
         */
        $httpProvider.defaults.withCredentials = true;

        $stateProvider
            .state('login',
                {
                    url: '/login',
                    templateUrl: 'app/login/Login.html',
                    controller: 'loginController',
                    controllerAs: 'vm',

                    resolve: {
                        loadPlugin: function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    files: ['app/login/loginController.js']
                                }
                            ]);
                        }
                    }
                })
            .state('app',
                {
                    abstract: true,
                    views: {
                        '@': {
                            templateUrl: 'app/layout/Layout.html',
                            controller: 'layoutController',
                            controllerAs: 'vm',
                            resolve: {
                                loadPlugin: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load([
                                        {
                                            files: ['app/layout/cLayoutController.js']
                                        }
                                    ]);
                                }
                            }
                        },
                        'header@app': {
                            templateUrl: 'app/layout/header/Header.html'
                        },
                        'sidebar@app': {
                            templateUrl: 'app/layout/sidebar/sidebar.html',
                            controller: 'sidebarController',
                            controllerAs: 'vm',
                            resolve: {
                                loadPlugin: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load([
                                        {
                                            files: ['app/layout/sidebar/sidebarController.js']
                                        }
                                    ]);
                                }
                            }
                        }
                    }


                })
        ;


    }

})(this.angular);