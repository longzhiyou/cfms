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
    function appStart( $rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

    }
})( this.angular );
