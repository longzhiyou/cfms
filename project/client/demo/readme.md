

# 通用基础管理系统平台

## 背景
由于每次建立一个新项目的时候,都需要重新从0开始构建,原有的一些功能不能重复利用,这导致公司成本高,效率低.


## 目标
实现一个可重复利用的通用管理系统,包括界面,数据库 以及必要的业务

## 范围
界面支持换肤
多语言
多租户
前后端分离
restful 接口





### 	使用fis3作为前端工程构建工具
* angular 手动依赖问题,使用插件可以自动添加
    * https://github.com/zhangtao07/fis3-angular-demo
    * npm install -g fis-preprocessor-annotate https://www.npmjs.com/package/fis-preprocessor-annotate
        >A preprocessor plugin for fis to add and rebuild angularjs dependency injection annotations
* 


### 编程规范
> https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/zh-CN.md
* `手动添加依赖`(原因:压缩时会产生错误的变量，因此在运行时就会报错。)
* 不需要手动依赖，则需要ng-annotate gulp-ng-annotate /* @ngInject */ 具体参考相关文章
* 命名规范
	* 文件名 FeatureType.js
	* 控制器 HttpController 驼峰式
	* 服务 等等 httpInterceptor 驼峰第一个单词小写

###	要点
* bootstrap+angularjs 为主
* bower 进行第三方管理
* 统一使用不带压缩的文件,这样调试方便
* bower上没有的,统一放在vendor文件夹下面

### 技术选型
#### UI
* table
* checkbox
* date/time
* 进度条
* 树
* sliderbar
* notify
* alert
* 可编辑 [X-editable](http://vitalets.github.io/x-editable/demo-bs3.html?c=inline)
* data
    * https://github.com/swimlane/angular-model-factory
    
###其他库
* mock.js https://segmentfault.com/a/1190000003087224


### 插件 plugins 
* bower install https://github.com/daneden/animate.css.git#3.5.1 -save
* bower install https://github.com/dangrossman/bootstrap-daterangepicker.git -save
* bower install https://github.com/sofish/typo.css.git
* bower install angular-daterangepicker --save https://github.com/fragaria/angular-daterangepicker
* bower install angular-logger --save 依赖momentjs and sprintf.js https://github.com/better-js-logging/angular-logger
* Bootstrap Datepicker 
* angular-idle bower install ng-idle http://hackedbychinese.github.io/ng-idle/
* [toastr](https://github.com/CodeSeven/toastr)
* [AngularJS-Toaster](https://github.com/jirikavi/AngularJS-Toaster)
* [angular-notify](https://github.com/cgross/angular-notify)
* [ngSweetAlert](https://github.com/oitozero/ngSweetAlert)
* slick
    * [angular-slick](https://github.com/vasyabigi/angular-slick)
    
* [iOS 复选框风格 Switchery](https://github.com/servergrove/NgSwitchery)
* > [插件列表](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S)
* [ngImgCrop](https://github.com/alexk111/ngImgCrop)
* [awesomeBootstrapCheckbox:](https://github.com/flatlogic/awesome-bootstrap-checkbox)
* table
	* [ng-table](http://ng-table.com/#/)
	* [datatables](https://datatables.net/examples/styling/bootstrap.html)
	* [angular-datatables](http://l-lin.github.io/angular-datatables/#/welcome) [github](https://github.com/l-lin/angular-datatables)
* upload
	* [File Upload](https://github.com/blueimp/jQuery-File-Upload)
	
* > 相关插件库参考https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S

	
#### angular 相关
* [angular-ui](https://github.com/angular-ui)
    * [bootstrap](http://angular-ui.github.io/bootstrap/)
    * [UI Calendar](http://angular-ui.github.io/ui-calendar/ )
        * https://github.com/mattlewis92/angular-bootstrap-calendar
        * http://angular-ui.github.io/ui-calendar/
        * http://www.mikesmithdev.com/blog/fullcalendar-event-details-with-bootstrap-modal/
    * [ui-layout](http://angular-ui.github.io/ui-layout/)
    * [ui-tour](https://github.com/angular-ui/ui-tour)
    * [angular-bootstrap-tour](https://github.com/benmarch/angular-bootstrap-tour)
    * [angular-knob 旋钮插件](https://github.com/yunlzheng/angular-knob)
    * [ngJsTree](http://ezraroi.github.io/ngJsTree/)
    
### 打包部署``

### 开发结构
```javascript
    /**
     * recommended
     */
    app/
        appModule.js
        appConfig.js
        appRun.js
        core/
        blocks/
        components/
            calendarDirective.js
            calendarDirective.html
            userProfile.directive.js
            userProfile.directive.html
        layout/
            topnav.html
            topnav.controller.js
        dashboard/
            dashboard.html
            dashboard.js
            dashboard.module.js
        people/
            attendees.html
            attendees.controller.js
            people.routes.js
            speakers.html
            speakers.controller.js
            speaker-detail.html
            speaker-detail.controller.js
        services/
            data.service.js
            localstorage.service.js
            logger.service.js
            spinner.service.js
    index.html
    README.md
```


### js加载顺序说明
1. app.js 此文件初期可能加载jQuery相关的功能.
2. core.module.js 在加载angular模块之前，需要的依赖
2. app.module.js angular所依赖的模块

### css 关键点
``` css
.header .navbar-brand  img{
	min-width: 100px;
	margin-top: -20px;
}

body.header-fixed-space-default {
	padding-top: 50px;
}

```

``` javascript
app.value("baseUrl", "http://myrestservice.com/api/v1");

```
### 其他
* http://www.oschina.net/translate/angularjs-form-validation
* [翻译：AngularJS应用的认证技术](http://www.cnblogs.com/webFrontDev/archive/2014/04/03/3641975.html)
* [AngularJS中的http拦截](http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/)
* [Understanding HTTP Interceptors In AngularJS](http://www.c-sharpcorner.com/UploadFile/dev4634/understanding-http-interceptors-in-angular-js/)

