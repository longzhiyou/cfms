(function (angular) {
    'use strict';

    angular.module("app.ui").controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$rootScope', '$scope'];

    /////////////////////
    function ProfileController($rootScope, $scope) {

        //$scope.lang = $rootScope.lang;
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


    }

}(this.angular));

