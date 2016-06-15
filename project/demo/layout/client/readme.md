
# 工程布局例子
### 关键点
* google 相关的字体要屏蔽或者替代

##命名
### 文件命名
* 第一个单词大写的驼峰式,如PersonManager
* 文件夹小写驼峰，或者简写
* 控制器、指令、服务等要有对应的后缀SidebarController
* 函数也是大写驼峰如：SidebarController
* 变量以及注入的名称是小写如
	* controller('sidebarController'
	* module("app")

### 多语言
* 所有要显示的地方都要用英文


### 布局框架
* 使用 [AdminLTE](https://github.com/almasaeed2010/AdminLTE) 为基础
* 参考对应的项目：
	* [Angular-AdminLTE](https://github.com/ahmadalibaloch/Angular-AdminLTE)
	* [laravel-angular-admin](https://github.com/silverbux/laravel-angular-admin)


### 开发结构
```javascript
    app/
        common/
            DataService.js
        widget/    
        rest/
            personService.js
            productService.js
            otherService.js
        businessModule1/  
            businessModule1.js
            businessModule1Config.js
        businessModule2/ 
        login/
        App.js
        AppConfig.js
    assets/
        css/
            custom.css
            app.css
        images/
        
    bower_components/
        
    index.html
    README.md
    bower.json
    fis-conf.js
    package.json
```
### 文件夹说明
* app:主要是和运行业务相关的文件
* assets:主要是和样式，固定脚本相关，不涉及业务
* bower_components 全部是第三方库
* widget: 业务相关的小组件，使用assets等css文件和js组装的通用组件
* businessModule1:业务相关的模块目录，每一个目录有自己的模块依赖定义。


>
[jquery-metismenu-not-working-loading-data-async-with-angularjs](http://stackoverflow.com/questions/34026478/jquery-metismenu-not-working-loading-data-async-with-angularjs-controller)
```
I have solved the problem using an Angular Directive to execute the metisMenu function when last element of the ng-repeat is rendered to the DOM.

  app.directive('metis', function ($timeout) {
      return function ($scope, $element, $attrs) {
          if ($scope.$last == true) {
              $timeout(function () {
                  $('#side-menu').metisMenu();
              }, 250)
          }
      };
  });
  Then I have to use the directive on the Ng repeat element

  <li ng-repeat="elementL1 in menuElements" ng-init="menuElements != null" metis="">
```
