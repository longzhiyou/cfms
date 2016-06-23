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
            replace: true,
            // require: '^message',
            templateUrl:"app/directive/infoBox/infoBox.html",
            scope: {
                contentText: '='
               },
            link: linkFn
        };

        function linkFn(scope, elem, attrs){

        }
    }

})(this.angular);