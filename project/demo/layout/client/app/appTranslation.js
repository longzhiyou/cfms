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
    angular.module("app").config(Language);

    /* @ngInject */
    function Language( $translateProvider) {

        // var lang = window.localStorage.lang||'zh';
        // $translateProvider.preferredLanguage(lang);
        //useStaticFilesLoader 方式需要添加client的前缀
        // $translateProvider.useStaticFilesLoader({
        //     prefix: '/client/app/i18n/',
        //     suffix: '.json'
        // });
        //
        // $translateProvider.registerAvailableLanguageKeys(['en', 'zh'], {
        //     'en_US': 'en',
        //     'en_UK': 'en',
        //     'zh_CN': 'zh'
        // });

        $translateProvider.useUrlLoader('app/i18n/zh.json');
        //auto determine preferred lang
        $translateProvider.determinePreferredLanguage();
        //when can not determine lang, choose en lang.
        $translateProvider.fallbackLanguage('zh');

    }

})(this.angular);