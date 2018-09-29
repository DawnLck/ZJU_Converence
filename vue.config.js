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

 // 构建好的文件输出到哪里
 baseUrl: '',

 // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
 outputDir: undefined,

 // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
 assetsDir: './',

 runtimeCompiler: undefined,
 productionSourceMap: undefined,
 parallel: undefined,
 css: undefined
}
