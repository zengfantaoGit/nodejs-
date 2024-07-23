
const fs = require('fs')
const http = require('http')
const path = require('path')
// 引入url模块
const url = require('url')

http.createServer((request, response) => {
    // console.log(request.url)   // /search?num=1

    // 若在url.parse的第二个参数添加 true 则会将原先 request.url的部分进行裁剪并且以对象的形式赋值query
    const parse = url.parse(request.url, true)
    // 以url对象的形式输出
    console.log(parse)

    //请求路径 parse.pathname ， 查询字符串 parse.query
    /*
    * Url {
         protocol: null,
         slashes: null,
         auth: null,
         host: null,
         port: null,
         hostname: null,
         hash: null,
         search: '?num=1',
         query: 'num=1',
         pathname: '/search',
         path: '/search?num=1',
         href: '/search?num=1'
}
*/
    // 设置响应头，确保中文转码不乱
    response.setHeader('content-type','text/html;charset=utf-8');
    response.end(__filename)
}).listen(9001, () => {
    console.log(`${__filename}启动服务！`)
})