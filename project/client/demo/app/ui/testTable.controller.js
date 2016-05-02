(function (angular) {
    'use strict';

    angular.module("app.ui").controller('TestGridController', TestGridController);

    TestGridController.$inject = ['$rootScope', '$scope', '$resource', 'NgTableParams'];

    /////////////////////
    function TestGridController($rootScope, $scope, $resource, NgTableParams) {

        //$scope.lang = $rootScope.lang;
        var vm = this;
        vm.description = 'NAME';
        vm.search = search;

        vm.testAdd = testAdd;
        var data = [{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}];

        $scope.tableParams = new NgTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: data.length, // length of data
            getData: function ($defer, params) {
                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

        //vm.myData = [
        //    {
        //        "name": "lzy",
        //        "gender": "男"
        //    },{
        //        "name": "long",
        //        "gender": "女"
        //    }];

        //$scope.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
        //    if( col.filters[0].term ){
        //        return 'header-filtered';
        //    } else {
        //        return '';
        //    }
        //};


        //var translate = "headerCellFilter: 'translate'";
        //, displayName: 'GENDER'

        vm.column = [
            {field: 'partyId'},
            {field: 'name'},
            {field: 'gender'},
            {field: 'height'},
            //{field: 'company', enableSorting: false  },
            {
                name: 'edit',
                displayName: '编辑',
                cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="edit(row.entity)" >Edit</button> '
            }
        ];
        //{field: 'name', displayName: '姓名',headerCellClass: $scope.highlightFilteredHeader },
        $scope.gridOptions = {
            enableFiltering: true,
            columnDefs: vm.column
        };

        var len = $scope.gridOptions.columnDefs.length;
        for (var i = 0; i < len; i++) {

            var col = $scope.gridOptions.columnDefs[i];
            col.displayName = col.field;
            col.headerCellFilter = 'translate';

        }


        function search() {
            var peopleResource = $resource('/party/people');
            var data = peopleResource.query();
            $scope.gridOptions.data = data;
            vm.myData = data;
        }

        function testAdd() {

            var tempData = {
                "name": "test",
                "gender": "男"
            };
            vm.myData.push(tempData);

        }

    }

}(this.angular));

