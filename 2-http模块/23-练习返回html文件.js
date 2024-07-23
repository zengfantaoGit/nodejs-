

const fs = require('fs')
const http = require('http')
const path = require('path')

http.createServer((request, response) => {
    // 1.同步读取文件
    // const readFileSync = fs.readFileSync('./html/table.html')
    // // console.log(readFileSync.toString())
    // response.write(readFileSync)
    // // 必须添加 response.end 否则通道不关闭
    // response.end()

    // 2.流式异步读取文件
    const readStream = fs.createReadStream('./html/table.html');
    // 可能会发送多次请求
    readStream.on('data', chunk => {
        console.log(chunk.toString())
        response.write(chunk)
    })
    readStream.on('end',() => {
        response.end()
    })
}).listen(9000, () => {
    console.log(`${__filename}启动服务`)
})