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

    
    .match('app/**.js', {
        preprocessor: fis.plugin('annotate'),
        optimizer: fis.plugin('uglify-js')
    })

    .match('app/**.css', {
      useSprite: true,
      optimizer: fis.plugin('clean-css')
    })
    .match('assets/**.css', {
        useSprite: true,
        optimizer: fis.plugin('clean-css')
    })
    .match('assets/**.png', {
      optimizer: fis.plugin('png-compressor')
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
