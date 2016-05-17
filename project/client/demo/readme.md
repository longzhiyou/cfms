
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
* 文件命名 feature.type.js

###	要点
* bootstrap+angularjs 为主
* bower 进行第三方管理
* 统一使用不带压缩的文件,这样调试方便
* bower上没有的,统一放在vendor文件夹下面

### 插件 plugins 
* bower install https://github.com/daneden/animate.css.git#3.5.1 -save
* bower install https://github.com/dangrossman/bootstrap-daterangepicker.git -save
* bower install https://github.com/sofish/typo.css.git
* bower install angular-daterangepicker --save https://github.com/fragaria/angular-daterangepicker
* bower install angular-logger --save 依赖momentjs and sprintf.js https://github.com/better-js-logging/angular-logger
* Bootstrap Datepicker 
* angular-idle bower install ng-idle http://hackedbychinese.github.io/ng-idle/
* toastr.js
* [iOS 复选框风格 Switchery](https://github.com/servergrove/NgSwitchery)
* > [插件列表](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S)

#### angular 相关
* [angular-ui](https://github.com/angular-ui)
    * [bootstrap](http://angular-ui.github.io/bootstrap/)
    * [UI Calendar](http://angular-ui.github.io/ui-calendar/ )
        * https://github.com/mattlewis92/angular-bootstrap-calendar
        * http://angular-ui.github.io/ui-calendar/
        * http://www.mikesmithdev.com/blog/fullcalendar-event-details-with-bootstrap-modal/
    * [ui-layout](http://angular-ui.github.io/ui-layout/)
    * [ui-tour](https://github.com/angular-ui/ui-tour)
    * [angular-knob 旋钮插件](https://github.com/yunlzheng/angular-knob)
    * 
### 打包部署




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

