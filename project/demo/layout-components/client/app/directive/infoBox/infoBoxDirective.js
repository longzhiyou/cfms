/**info box指令
 * Created by longzhiyou on 2016-06-16.
 */
(function(angular){
    "use strict";
    angular.module('app')
        .directive('infoBox', infoBoxDirective);
    /* @ngInject */
    function infoBoxDirective(){
        return {
            restrict: "E",
            compile: compileFn
        };

        function compileFn(tElem, tAttrs){

        }
    }

})(this.angular);