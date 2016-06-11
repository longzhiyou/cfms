
fis.set('project.ignore', [
    '.git/**',
    '.svn/**',
    'bower_components/**',
    'node_modules/**',
    'bower.json',
    'fis-conf.js'
]);

//由于使用了bower，有很多非必须资源。通过set project.files对象指定需要编译的文件夹和引用的资源
fis.set('project.files', ['*.html','page/**','styles/**', 'map.json', 'components/**', 'libs/**', '!**/*_test.js']);

fis.set('admin', '/admin');//admin目录

// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });



// fis.match('bower_components/**.css', {
//     rExt: '.min.css'
// });

//
// fis.match('bower_components/**.js', {
//     rExt: '.min.js' // 代码编译产出时，后缀改成 .min.js
// });





// fis.match('*', {
//     useHash: true
// });

// fis.match('*.{js,css,png,gif}', {
//     useHash: true // 开启 md5 戳
// });


// fis.match('*.js', {
//     optimizer: fis.plugin('uglify-js')
// });

fis.match('*.min.js', {
    optimizer: null
});

// fis.match('*.css', {
//     useSprite: true,
//     optimizer: fis.plugin('clean-css')
// });

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});





// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

//清除其他配置，只剩下如下配置
// fis.match('*.{js,css,png}', {
//     useHash: true
// });

// fis.match('*', {
//   useHash: false
// });


// fis.match('profile.controller.js', {
//     preprocessor: fis.plugin('annotate')
// });

// fis.match('bower_components/*.js', {
//     rExt: '.min.js' // 代码编译产出时，后缀改成 .js
// });

// fis.match('profile.controller.js', {
//     preprocessor: fis.plugin('annotate'),
//     optimizer: fis.plugin('uglify-js')
// });
//
//
// fis.match('outfile.js', {
//     optimizer: fis.plugin('uglify-js')
// });


/**********************生产环境下CSS、JS压缩合并*****************/
//使用方法 fis3 release prod
fis.media('prod')
    //注意压缩时.async.js文件是异步加载的，不能直接用annotate解析
    .match('**.js', {
        preprocessor: fis.plugin('annotate'),
        optimizer: fis.plugin('uglify-js')
    })
    // .match('/**(.async).js', {
    //     preprocessor: null,
    //     optimizer: null
    // })
    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    })
    .match("app/**/*.js", {
        packTo: "/client/app/*.js"
    })
    //所有页面中引用到的bower js资源
    .match("bower_components/**/*.js", {
        packTo: "/client/vendor/*.js"
    })
    //所有页面中引用到的bower css资源
    .match("bower_components/**/*.css", {
        packTo: "/pkg/vendor.css"
    });

// // 所有的 js
// fis.match('**.js', {
//     //发布到/static/js/xxx目录下
//     release : '/static/js$0'
// });
//
// // 所有的 css
// fis.match('**.css', {
//     //发布到/static/css/xxx目录下
//     release : '/static/css$0'
// });
//
// // 所有image目录下的.png，.gif文件
// fis.match('/images/(*.{png,gif})', {
//     //发布到/static/pic/xxx目录下
//     release: '/static/pic/$1$2'
// });


// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });


// {
//     "registry": "http://192.168.1.11:5678",
//     "timeout": 300000,
//     "directory": "bower_components"
// }