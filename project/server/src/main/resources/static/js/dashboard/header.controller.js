/*
 * header viewmodel associated with the header.html view
 * at the top of the shell.
 * It displays navigation among the main app 'pages'
 */

(function(angular) {
    'use strict';

    angular.module( "app" ).controller( 'HeaderController', ['$state', HeaderController]);

    /////////////////////
    function HeaderController( $state ) {

        var headerStates = [
            { label: 'Ui',     link: '', fa:'fa fa-home fa-fw', children: [
                { label: 'profile', link: 'app.profile', fa:'fa fa-book'
                    //,children:[
                    //{label: 'Home.children1.children', link: 'dashboard.home'}]
                }
                ,{ label: 'FontAwesome', link: 'app.FontAwesome'}
                ]
            },
            { label: '测试',     link: '', fa:'fa fa-home fa-fw', children: [
                    { label: 'UI-Grid', link: 'app.TestTable', fa:'fa fa-book'
                        //,children:[
                        //{label: 'Home.children1.children', link: 'dashboard.home'}]
                    }
                    ,{ label: 'FontAwesome', link: 'app.FontAwesome'}
                ]
            }
            //,{ label: 'Content',  link: 'app.ui'}

        ];



        var vm = this;
            vm.homeSref     = 'app.home';
            vm.isSelected   = isSelected;
            vm.states       = headerStates;
            vm.selectState = selectState;
        function isSelected( state ){
            //var path = $location.path().toLowerCase() || '/home';
            //var roots = state.roots;
            //if (roots){
            //    for (var i = roots.length; i--;){
            //        if (-1 < path.indexOf(roots[i])){return true;}
            //    }
            //}
            return true;
        }
        function selectState( state ){
            console.log(state);
        }

    };

}( this.angular ));
