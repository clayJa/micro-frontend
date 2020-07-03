const path = require('path');
module.exports = {
  // publicPath: '/', // 根路径  微应用的子应用需要在主应用中加载微应用时需要重新设置 publicPath，这样才能正确加载微应用的相关资源
  outputDir: 'dist', // 构建输出目录 npm run build
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
  lintOnSave: true, // 是否开启eslint保存检测，有效值: true || false || 'error'
  devServer: {
    open: false, // 使用npm run serve 之后是否自动在游览器中打开项目
    host: 'localhost', // 主机名字
    // 监听端口
    port: 10200,
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    https: false, // true启动游览器会给出一些警告
    hotOnly: false, // 热更新 webpack已经有
    disableHostCheck: true,
    proxy: {
      // 配置跨域，请求后端接口，样例
      '/api': {
        target: 'http://localhost:9505',
        ws: true, // 是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: "VueMicroApp",
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: "umd",
      // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
      jsonpFunction: `webpackJsonp_VueMicroApp`,
    },
  },
};
