(function () {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ui.router',        // Routing
        'ui.bootstrap',
        // 'ui.grid',
        // 'ui.grid.edit',
        // 'ui.grid.selection',
        'ngResource',
        'ngAnimate',
        'pascalprecht.translate',
        'ngTable',
        'datatables',
        'datatables.bootstrap',
        /*
         * Our reusable cross app code modules
         */

        /*
         * 3rd Party modules
         */

        'oc.lazyLoad',                  // ocLazyLoad
        'angular-logger-max'

    ]);
})();
