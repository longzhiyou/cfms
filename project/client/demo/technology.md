

# 相关技术点

``` javascript

app.config(function ($routeProvider, $httpProvider) {
$httpProvider.interceptors.push('AuthInterceptor');

$routeProvider
.when('/', { .....etc
The AuthInterceptor is this factory:

'use strict';

app.factory('AuthInterceptor', function ($rootScope, $q, $window, $location) {
return {
  request: function (config) {
    config.headers = config.headers || {};
    if ($window.localStorage.token) {
      config.headers.Authorization = 'Token ' + $window.localStorage.token;
    }
    return config;
  },

  responseError: function (response) {
    if (response.status === 401) {
      $window.localStorage.removeItem('token');
      $window.localStorage.removeItem('email');
      $location.path('/');
      return;
    }
    return $q.reject(response);
  }
};
});

```
``` javascript

$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
	if(toState.name=='login')return;// 如果是进入登录界面则允许
	// 如果用户不存在
	if(!$rootScope.user || !$rootScope.user.token){
		event.preventDefault();// 取消默认跳转行为
		$state.go("login",{from:fromState.name,w:'notLogin'});//跳转到登录界面
	}
});

// 如果用户已经登录了，则立即跳转到一个默认主页上去，无需再登录
if($rootScope.user.token){
	$state.go($rootScope.defaultPage);
	return;
}
//另外在登录成功回调后还可以跳转到上一次界面，也就是上面记录的from
var from = $stateParams["from"];
$state.go(from && from != "login" ? from : $rootScope.defaultPage);

```