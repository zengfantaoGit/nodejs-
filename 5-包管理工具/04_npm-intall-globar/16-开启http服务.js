/*
*  node.js内置的 http 模块封装对应http的操作
*   const http = require('http') 引入模块
*
* */
// 引入http模块
const http = require('http')
const fs = require('fs')
// http.createServer(回调函数(request, response))
/*
*  回调参数内部含有两个参数:
*  // request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据
*  // response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文
*   当这个服务器接收到 请求时会触发回调函数
* */
const server = http.createServer((request, response) => {
    // 设置响应体部分，使用fs模块的readFileSync方法读取html文件并且设置到响应体
    // 这里若使用异步方法，会因为还未设置响应体就已经发送出去。发送login.html文件
    response.end('hello node 111')

    // 正常情况，若响应头设置中文会出现乱码问题
    // 通过设置response的响应头的content-type属性的编码属性。即可解决响应头乱码问题
    // 设置响应头
    // response.setHeader('content-type','text/html;charset=utf-8');
    // response.end('你好')
})


// 设置该服务器的监听端口，当有发送 主机ip:9000 的ip信息时会触发createServer的回调函数
// listen的回调函数会在服务启动成功时触发
// 此时node.js中成功开启的一个端口为9000，ip地址为主机的服务器
server.listen(9000, (...arr) => {
    console.log('server服务启动成功！',arr)
})