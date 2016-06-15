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

        var lang = window.localStorage.lang||'cn';
        $translateProvider.preferredLanguage(lang);
        $translateProvider.useStaticFilesLoader({
            prefix: '/i18n/',
            suffix: '.json'
        });

        //翻译会放到这里
        $translateProvider.translations('en', {
                partyId: 'partyId',
                name: 'Name',
                gender: 'gender',
                height: 'height',
                company: 'Company'
            })
            .translations('zh', {
                Dashboard: '仪表盘',
                name: '姓名',
                gender: '性别',
                height: '身高',
                company: '公司',
                query: '查询'
            });

        $translateProvider.preferredLanguage('zh');

    }

})(this.angular);