/*
 * The application startup function, called in the app module's run block
 * Created apart from app.js so it can be easily stubbed out
 * during testing or tested independently
 */
(function (angular) {

    angular.module("app").factory('appStart', ['$rootScope', 'Logger', 'auth', 'amMoment', factory]);

    function factory($rootScope, Logger, auth, amMoment) {

        var appStart = {
            reportStateChangesEnabled: false,
            start: start
        };
        return appStart;
        //////////////
        function start() {

            Logger.debug = true;
            moment.locale('zh-cn');
            // amMoment.changeLocale('zh-cn');

            console.log("cfms is loaded and running on ");
            // Trigger initial loading of data from server
            // The app may appear to be more responsive if loading happens in background
            // while the app launches on a splash page that doesn't actually need data.
            reportStateChanges();
        }

        // report to console when UI-Router state changes
        function reportStateChanges() {

            appStart.reportStateChangesEnabled = true;
            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState) {


                    if (!auth.authenticated && (toState.name != "login")) {
                        event.preventDefault();
                        //console.log( auth );
                        $rootScope.$state.go("login");
                    }

                    // 如果用户未登录
                    // if (!AuthService.userLoggedIn()) {
                    //     if (next.templateUrl === "login.html") {
                    //         // 已经转向登录路由因此无需重定向
                    //     } else {
                    //         $location.path('/login');
                    //     }
                    // }


                    Logger.log("stateChangeStart: from '" + fromState.name + "' to '" + toState.name + "'");
                });

            $rootScope.$on('$stateChangeError',
                function (event, toState, toParams, fromState, fromParams, error) {
                    Logger.log("stateChangeError: from '" + fromState.name + "' to '" + toState.name + "' with error: " + error);
                });

            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState) {
                    Logger.log("stateChangeSuccess: from '" + fromState.name + "' to '" + toState.name + "' with params " +
                        JSON.stringify(toParams));
                });

        }
    }
})(this.angular);
