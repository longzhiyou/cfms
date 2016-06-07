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
        .factory('httpInterceptor', httpInterceptorFactory);

    /* @ngInject */
    function httpInterceptorFactory($log,$rootScope, $q, $window, $location){
    	"ngInject";
        $log.debug('$log is here to show you that this is a regular factory with injection');
        return{
            "responseError": function(response) {
                if(response.status == 401) {
                    var rootScope = $rootScope;
                    var state = $rootScope.$state.current.name;
                    rootScope.stateBeforLogin = state;
                    rootScope.$state.go("login");
                    return $q.reject(response);
                }
                else if(response.status === 404) {
                    $log.debug("404!");
                    return $q.reject(response);
                }
                else {
                    var rootScope = $rootScope;
                    var state = $rootScope.$state.current.name;
                    rootScope.stateBeforLogin = state;
                    rootScope.$state.go("login");
                    return $q.reject(response);
                }
            }
        }

    }

})(angular);

(function(angular){
    "use strict";
    angular.module('app')
        .controller('HttpController', HttpController);
    /* @ngInject */
    function HttpController($scope){
        var vm = this;
        
    }
    
})(angular);