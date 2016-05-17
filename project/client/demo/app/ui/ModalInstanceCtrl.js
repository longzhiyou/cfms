/**
 * @ngdoc controller
 * @name app.ui:ModalInstanceCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
(function () {
    'use strict';

    angular.module('app.ui')
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);

    function ModalInstanceCtrl($scope, $uibModalInstance, items, dataServiceDemo) {

        dataServiceDemo.validate();
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }

}());


(function () {
    'use strict';

    angular.module('app.ui')
        .service('dataServiceDemo', dataServiceDemo);

    function dataServiceDemo(Logger) {

        // var someValue = '';
        // var service = {
        //     save: save,
        //     someValue: someValue,
        //     validate: validate
        // };
        // return service;

        // 此处使用service的方式，用this就直接代表上面的service变量了
        this.save = save;
        this.validate = validate;

        ////////////

        function save() {
            /* */
            Logger.info("save");
        }

        function validate() {
            /* */
            Logger.info("validate");
        }
    }

}());
