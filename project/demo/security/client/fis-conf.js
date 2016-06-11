


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


fis.set('project.ignore', [
    '.git/**',
    '.svn/**',
    'bower_components/**',
    'node_modules/**',
    'bower.json',
    'fis-conf.js'
]);


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
// fis.media('prod')
//     //注意压缩时.async.js文件是异步加载的，不能直接用annotate解析
//     .match('**.js', {
//         preprocessor: fis.plugin('annotate'),
//         optimizer: fis.plugin('uglify-js')
//     })
//     .match('/**(.async).js', {
//         preprocessor: null,
//         optimizer: null
//     })
//     .match('**.css', {
//         optimizer: fis.plugin('clean-css')
//     })
//     .match("lib/mod.js", {
//         packTo: "/pkg/vendor.js"
//     })
//     //所有页面中引用到的bower js资源
//     .match("bower_components/**/*.js", {
//         packTo: "/pkg/vendor.js"
//     })
//     //所有页面中引用到的bower css资源
//     .match("bower_components/**/*.css", {
//         packTo: "/pkg/vendor.css"
//     });

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