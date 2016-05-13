(function (angular) {
    'use strict';

    angular.module("app.ui").controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope','$uibModal', '$log'];

    /////////////////////
    function ProfileController($scope, $uibModal, $log) {

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

        var vm = this;

        var Cities = [{ id: 1, name: '北京' }, { id: 2, name: '上海' }, { id: 3, name: '广州' }];
        vm.mycity = Cities[0];
        vm.Cities=Cities;


        vm.myOptions = [{
            "value": 106,
            "group": "分组1",
            "label": "选项1"
        },{
            "value": 107,
            "group": "分组1",
            "label": "选项2"
        },{
            "value": 108,
            "group": "分组2",
            "label": "选项3"
        },{
            "value": 109,
            "group": "分组2",
            "label": "选项4"
        },{
            "value": 110,
            "group": "分组2",
            "label": "选项5"
        }];

        vm.myOption = vm.myOptions[0];


        vm.items = [{
            id: 1,
            label: 'aLabel',
            subItem: { name: 'aSubItem' }
        }, {
            id: 2,
            label: 'bLabel',
            subItem: { name: 'bSubItem' }
        }];
        // vm.selected = vm.items[0];



        vm.users = [
            { name: 'lzy', gender: '男', age: 25 },
            { name: '老人', gender: '男', age: 18 },
            { name: '跃达老人', gender: '女', age: 18 },
            { name: '王奶奶', gender: '女', age: 18 },
            { name: '张奶奶', gender: '女', age: 18 },
            { name: 'fhw r', gender: '女', age: 18 }
        ];

        vm.selected = vm.items[0];


        vm.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        vm.addAlert = function() {
            vm.alerts.push({msg: 'Another alert!'});
        };

        vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
        };


    }

}(this.angular));



(function (angular) {
    'use strict';

    angular.module("app.ui").controller('ModalInstanceCtrl', ModalInstanceCtrl);

    ModalInstanceCtrl.$inject = ['$scope','$uibModalInstance', 'items'];

    /////////////////////
    function ModalInstanceCtrl($scope, $uibModalInstance, items) {

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

}(this.angular));



