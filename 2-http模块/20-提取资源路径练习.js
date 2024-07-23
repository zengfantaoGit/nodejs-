
const http = require('http')
const url = require('url')
const path = require('path')

http.createServer((request, response) => {
    const urlObj = url.parse(request.url, true)
    // 设置响应头，确保中文转码不乱
    response.setHeader('content-type','text/html;charset=utf-8');
    if (urlObj.pathname === '/login' && request.method === "GET") {
        response.end('登陆页面.html')
    }else if (urlObj.pathname === '/reg' && request.method === "GET") {
        response.end("注册页面.html")
    }else {
        response.end("<h1>404 Not Found</h1>")
    }
}).listen(9000, () => {
    console.log(`${__filename}服务启动`)
})