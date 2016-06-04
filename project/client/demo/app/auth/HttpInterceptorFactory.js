/**
 * @ngdoc service
 * @name app:HttpInterceptorFactory
 *
 * @description
 *
 *
 * */
(function(angular){
    "use strict";
    angular.module('app')
        .factory('HttpInterceptor', HttpInterceptorFactory);

    /* @ngInject */
    function HttpInterceptorFactory($log){
    	"ngInject";
        $log.debug('$log is here to show you that this is a regular factory with injection');

    }

})(angular);