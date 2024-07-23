
const fs = require('fs')
const http = require('http')
const path = require('path')

http.createServer((request, response) => {
    const url = new URL(request.url,'http://www.baidu.com')
    console.log(url.pathname)
    // 根据访问路径动态返回资源，这样不会出现返回相同数据的结果
    // 此时 __dirname 为网站的根目录，所有静态资源都将在 __dirname文件夹内查找
    const readFileSync = fs.readFileSync(__dirname + url.pathname)
    response.end(readFileSync)
}).listen(9000, () => {
    console.log(`${__filename}启动服务`)
})