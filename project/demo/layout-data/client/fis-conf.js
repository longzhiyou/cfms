// Global start
fis.set('project.ignore', [
    '.git/**',
    '.svn/**',
    'bower_components/**',
    'node_modules/**',
    'bower.json',
    'package.json',
    'README.md',
    'readme.md',
    'fis-conf.js'
]);


fis.match('*.min.js', {
    optimizer: null
});

// Global end




/**********************生产环境下CSS、JS压缩合并*****************/
//使用方法 fis3 release prod
fis.media('prod')
    //注意压缩时.async.js文件是异步加载的，不能直接用annotate解析


    .match('app/**/*.js', {
        preprocessor: fis.plugin('annotate'),
        optimizer: fis.plugin('uglify-js')
    })

    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    })

    //所有页面中引用到的bower js资源
   ;

// fis.match('prod/**/*', {
//     deploy: fis.plugin('http-push', {
//         receiver: 'http://192.168.1.109:8999/receiver',
//         from: '/prod',
//         //远端目录
//         to: '/data/client/fis'
//     })
// });

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