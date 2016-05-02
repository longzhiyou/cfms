
###	使用fis3作为前端工程构建工具

###	要点
* bootstrap+angularjs 为主
* bower 进行第三方管理
* 统一使用不带压缩的文件,这样调试方便
* bower上没有的,统一放在vendor文件夹下面

### 插件 plugins 
* bower install https://github.com/daneden/animate.css.git#3.5.1 -save
* bower install https://github.com/dangrossman/bootstrap-daterangepicker.git -save
* bower install https://github.com/sofish/typo.css.git

* angular-idle bower install ng-idle http://hackedbychinese.github.io/ng-idle/
toastr.js

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

