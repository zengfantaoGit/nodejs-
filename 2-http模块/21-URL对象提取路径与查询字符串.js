const http = require('http')
const path = require('path')

http.createServer((request, response) => {
    // 实例化URL对象，也可以获取路径参数与查询字符串。
    /*
    *  若只有一个参数，则必须为完整的资源路径。缺少协议名或者ip端口号会报错
    *   若有两个参数，则第一个为访问的资源路径，第二个则是ip端口号
    * */
    // const url = new URL("https://www.xxx.com/search?kw=1")

    const url = new URL(request.url, 'https://www.baidu.com')
    // url.pathname 可以获取路径字符串。
    console.log(url.pathname)
    // url.searchParams.get(key) 获取key对应的value值
    console.log(url.searchParams.get('asdfsa'))

    response.end('url new!!!')
}).listen(9001, () => {
    console.log(`${__filename}启动服务！`)
})