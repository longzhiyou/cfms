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
    function configureStates( $stateProvider) {

        $stateProvider
            .state('app.business',
                {
                    url: '/business',
                    templateUrl: 'app/business/business.html',
                    controller: 'businessController',
                    controllerAs: 'vm',
                    resolve: {
                        loadPlugin: function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    files: ['app/business/businessCtrl.js']
                                }
                            ]);
                        }
                    }
                })
        ;
  
    }

})(this.angular);