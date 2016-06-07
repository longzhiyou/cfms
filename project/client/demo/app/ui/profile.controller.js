(function () {
    'use strict';

    angular.module("app.ui").controller('ProfileController', ProfileController);

    // ProfileController.$inject = ['$scope','$uibModal', '$log'];

    /////////////////////
    /* @ngInject */
    function ProfileController($http,$scope, $uibModal, $log, Logger, $ocLazyLoad, calendarConfig, moment) {

        //发送后端程序，验证跳转

        // // Simple GET request example:
        // $http({
        //     method: 'GET',
        //     url: 'http://localhost:8080/hello'
        // }).then(function successCallback(response) {
        //     // this callback will be called asynchronously
        //     // when the response is available
        //     $log.debug(successCallback);
        // }, function errorCallback(response) {
        //     $log.debug(errorCallback);
        //     // called asynchronously if an error occurs
        //     // or server returns response with an error status.
        // });

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        // ui-calendar
        /* config object */
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                header: {
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                eventClick: $scope.alertOnEventClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize,
                eventRender: $scope.eventRender

            }
        };

        // /* event source that contains custom events on the scope */
        // $scope.events = [
        //     {title: 'All Day Event',start: new Date(y, m, 1)},
        //     {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
        //     {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
        //     {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
        //     {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
        //     {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        // ];

        /* event sources array*/
        $scope.eventSources = [$scope.events];

        ////

        $scope.singleModel = 1;
        var normalLogger = $log.getInstance('ProfileController');
        normalLogger.info("This *will* appear in your console");

        $scope.message = {
            text: 'hello!',
            time: new Date()
        };

        $scope.datePicker = {};
        $scope.datePicker.date = {startDate: "2016/05/01", endDate: "2016/07/08"};
        $scope.datePicker.singleDate = "2016/05/04";
        $scope.datePicker.min = "2016-05-01";

        $scope.singleOpts = {
            singleDatePicker: true,
            eventHandlers: {
                'apply.daterangepicker': function (ev, picker) {
                    $log.info($scope.datePicker.singleDate.format('YYYY-MM-DD'));
                }
            }
        };

        $scope.date = {
            startDate: moment().subtract(1, "days"),
            endDate: moment()
        };
        $scope.singleDate = moment();

        $scope.apply = apply;
        $scope.opts = {
            locale: {
                applyClass: 'btn-green',
                applyLabel: "确定",
                fromLabel: "From",
                format: "YYYY/MM/DD",
                toLabel: "To",
                cancelLabel: '取消',
                customRangeLabel: 'Custom range'
            },
            ranges: {
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()]
            },
            eventHandlers: {'apply.daterangepicker': apply},
            showDropdowns: true
        };

        function apply() {
            $log.info($scope.datePicker.date.startDate.format('YYYY-MM-DD'));
            $log.info($scope.datePicker.date.endDate.format('YYYY-MM-DD'));
        }

        $scope.setStartDate = function () {
            $scope.date.startDate = moment().subtract(4, "days").toDate();
        };

        $scope.setRange = function () {
            $scope.date = {
                startDate: moment().subtract(5, "days"),
                endDate: moment()
            };
        };

        //Watch for date changes
        $scope.$watch('date', function (newDate) {
            $log.info('New date set: ', newDate);
        }, false);




        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/ui/ModalContentSpec.html',
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
                Logger.info("selectItem:" + selectedItem);
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


        vm.addAlert = addAlert;
        vm.closeAlert = closeAlert;

        // vm.avengers = [];
        // vm.getAvengers = getAvengers;
        // vm.title = 'Avengers';

        // activate();

        // function activate() {
        //     return getAvengers().then(function() {
        //         logger.info('Activated Avengers View');
        //     });
        // }
        //
        // function getAvengers() {
        //     return dataservice.getAvengers().then(function(data) {
        //         vm.avengers = data;
        //         return vm.avengers;
        //     });
        // }


        ////////////

        function addAlert() {
            vm.alerts.push({msg: 'Another alert!'});
        }

        function closeAlert(index) {
            vm.alerts.splice(index, 1);
        }


        // vm.weekDays = moment.weekDays;

        //These variables MUST be set as a minimum for the calendar to work
        vm.calendarView = 'month';
        // use moment instead of angular for formatting dates,很重要涉及多语言
        // calendarConfig.dateFormatter = 'moment';
        vm.viewDate = new Date();
        vm.events = [
            {
                title: 'An event',
                type: 'warning',
                startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
                draggable: true,
                resizable: true
            }, {
                title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
                type: 'info',
                startsAt: moment().subtract(1, 'day').toDate(),
                endsAt: moment().add(5, 'days').toDate(),
                draggable: true,
                resizable: true
            }, {
                title: 'This is a really long event title that occurs on every year',
                type: 'important',
                startsAt: moment().startOf('day').add(7, 'hours').toDate(),
                endsAt: moment().startOf('day').add(19, 'hours').toDate(),
                recursOn: 'year',
                draggable: true,
                resizable: true
            }
        ];


        vm.isCellOpen = true;

        vm.eventClicked = function (event) {
            alert.show('Clicked', event);
        };

        vm.eventEdited = function (event) {
            alert.show('Edited', event);
        };

        vm.eventDeleted = function (event) {
            alert.show('Deleted', event);
        };

        vm.eventTimesChanged = function (event) {
            alert.show('Dropped or resized', event);
        };

        vm.toggle = function ($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
        };

    }

}());


// (function (angular) {
//     'use strict';
//
//     angular.module("app.ui").controller('ModalInstanceCtrl', ModalInstanceCtrl);
//
//     ModalInstanceCtrl.$inject = ['$scope','$uibModalInstance', 'items'];
//
//     /////////////////////
//     function ModalInstanceCtrl($scope, $uibModalInstance, items) {
//
//         $scope.items = items;
//         $scope.selected = {
//             item: $scope.items[0]
//         };
//
//         $scope.ok = function () {
//             $uibModalInstance.close($scope.selected.item);
//         };
//
//         $scope.cancel = function () {
//             $uibModalInstance.dismiss('cancel');
//         };
//
//     }
//
// }(this.angular));



