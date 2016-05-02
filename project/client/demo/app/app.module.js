(function () {
    'use strict';

    angular
        .module('app', [
            /*
             * Order is not important. Angular makes a
             * pass to register all of the modules listed
             * and then when app.dashboard tries to use app.data,
             * its components are available.
             */

            'app.core',
            'app.ui'


        ])
        .run(['$rootScope', '$state', '$stateParams', 'appStart', 'auth',
            function ($rootScope, $state, $stateParams, appStart) {
                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                appStart.start();

                // Initialize auth module with the home page and login/logout path
                // respectively

                //if (!auth.authenticated) {
                //    $state.go('login');
                //}

                //auth.init('/home', '/login', '/logout');
            }]);

})();
