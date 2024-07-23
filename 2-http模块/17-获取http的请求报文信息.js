
const fs = require('fs')
const http = require('http')
const path = require('path')


/*
*  request 中包含所有此次浏览器发送的请求报文信息
* */
http.createServer((request, response) => {
    // console.log(request.method)    // GET方式发送请求
    // console.log(request.url)   ///search?asdfsa 返回url地址的路径与搜索字符串
    // console.log(request.httpVersion)   //返回http协议的版本 1.1 （极少使用）

    console.log(request.headers)  //返回request请求头的所有信息。以对象形式返回
    response.end('http node.js')
}).listen(9001, () => {
    console.log(`${__filename}启动服务！`)
})