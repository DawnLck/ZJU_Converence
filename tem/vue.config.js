module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */

  // 项目部署的基础路径

  // 我们默认假设你的应用将会部署在域名的根部,

  // 例如 https://www.my-app.com/

  // 如果你的应用部署在一个子路径下，那么你需要在这里

  // 指定子路径。比如将你的应用部署在

  // https://www.foobar.com/my-app/

  // 那么将这个值改为 '/my-app/'

  baseUrl: '/', // 构建好的文件输出到哪里

  outputDir: 'dist', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。

  assetsDir: '', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。

  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。

  filenameHashing: true, // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。

  lintOnSave: true, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。

  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。

  transpileDependencies: [
    /* string or regex */
  ], // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。

  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。

  chainWebpack: () => {},

  configureWebpack: () => {}, // CSS 相关选项

  css: {
    // extract: true, //Default: 生产环境下是 true，开发环境下是 false  是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。

    sourceMap: false, // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能

    loaderOptions: {}, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }

    modules: false // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
  }, // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores

  // parallel: require('os').cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

  // pwa: {}, // configure webpack-dev-server behavior

  devServer: {
    // open: process.platform === 'darwin',

    disableHostCheck: false,

    host: '0.0.0.0',

    port: 8088,

    https: false,

    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy

    proxy: null // string | Object

    // before: app => {}
  }, // 第三方插件配置

  pluginOptions: {
    // ...
  }
}
