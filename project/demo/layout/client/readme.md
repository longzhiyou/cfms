
# 工程布局例子
### 文件命名
* 第一个单词小写的驼峰式,如personManager
* 控制器、指令、服务等要有对应的后缀


### 开发结构
```javascript
    app/
        common/
            dataService.js
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
        app.js
        appConfig.js
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
