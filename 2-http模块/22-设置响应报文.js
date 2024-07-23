/*
*  response对象中可以配置对应的响应报文信息
* */

const http = require('http')
const path = require('path')

http.createServer((request, response) => {
    // 设置状态码  response.statusCode 属性
    response.statusCode = 404
    //  设置状态信息 response.statusMessage属性
    response.statusMessage = 'can not found'

    // 设置响应头  response.setHeader 重名响应头设置。也可以设置自定义响应头
    response.setHeader('Content-Type', ['text/plain; charset=utf-8', 'text/html;charset=utf-8']);
    response.setHeader('Server', 'node.js')

    //  response.write与response.end设置响应体
    /*
    *  response.write可以写多条，而response.end只能配置一个。
    *  多条响应体信息最终会拼接为一条数据
    * */
    response.write('哈哈哈')
    response.write('你还哦')
    response.end('响应数据')
}).listen(9000, () => {
    console.log(__filename)
})