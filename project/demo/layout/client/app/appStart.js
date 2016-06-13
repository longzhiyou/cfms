/**
 * 最后执行的模块
* The application startup function, called in the app module's run block
 * Created apart from app.js so it can be easily stubbed out
 * during testing or tested independently
 *
 * Created by bukeyan on 2016/6/12.
 */

(function( angular  ) {
    "use strict";

    angular.module('app').run(appStart);
    /* @ngInject */
    function appStart($log, $rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        reportStateChanges();

        function reportStateChanges() {

            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState) {

                });

            $rootScope.$on('$stateChangeError',
                function (event, toState, toParams, fromState, fromParams, error) {
                    $log.log("stateChangeError: from '" + fromState.name + "' to '" + toState.name + "' with error: " + error);
                });

            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState) {
                    $log.log("stateChangeSuccess: from '" + fromState.name + "' to '" + toState.name + "' with params " +
                        JSON.stringify(toParams));
                    
                    // 在这里切换
                    if (fromState.name==="login" && toState.name==="app.dashboard"){
                        $.AdminLTE.layout.fix();
                        
                    }
                });

        }

    }

})( this.angular );
