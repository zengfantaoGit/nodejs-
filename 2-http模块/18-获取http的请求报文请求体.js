
const fs = require('fs')
const http = require('http')
const path = require('path')


http.createServer((request, response) => {
    let data = ''
    // 为request绑定data事件，并添加对应的回调函数，chunk为请求体数据
    request.on('data', chunk => {
        data += chunk
    })
    request.on('end', () => {
        console.log(data)
        response.end('http node.js')
    })
}).listen(9001, () => {
    console.log(`${__filename}启动服务！`)
})