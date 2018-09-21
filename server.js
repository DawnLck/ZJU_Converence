const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
const app = express()

// app.use('/',express.static(__dirname + '/frontend/dist'));
app.use(history({
  verbose: true,
  index: 'index.html'
  // rewrites: [{
  //     from: '/\//', // 正则或者字符串
  //     to: '/index-gulp.html', // 字符串或者函数
  // }]
}))

app.use('/', express.static(path.join(__dirname, '/dist')))

let server = app.listen(8084, function () {
  let host = server.address().address
  let port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
