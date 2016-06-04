

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