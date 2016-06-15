/**
 * 定义app涉及的所有模块的总入口
 * Created by bukeyan on 2016/6/12.
 */
(function(angular){
    "use strict";
    /* @ngInject */
    angular.module('app', [
            'appCore',
            'pascalprecht.translate',       // Angular Translate
            'ncy-angular-breadcrumb'
        ]);


})(this.angular);