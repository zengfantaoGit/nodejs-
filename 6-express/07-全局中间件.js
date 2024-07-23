// 引入express包
const express = require('express');
// 创建 express对象
const app = new express();
// 设置对应的路由规则，只有访问的路径和方法与设置的项相同时才会触发对应的回调函数
const fs = require('fs')

// 全局定义的中间件，该中间件将会控制所有的访问路由
// req, res为截取的请求与响应，next为放行函数
function getlog(req, res, next) {
    console.log(req)
    fs.appendFileSync('./come.log', `host=${req.host}  path=${req.path}\n`)
    // 放行路由
    next()
}

// 执行顺序从上到下
app.use(function (request, response, next) {
    console.log('定义第一个中间件');
    next();
})
app.use(function (request, response, next) {
    console.log('定义第二个中间件');
    next();
})

// 启动全局中间件，代码需要放置在其他路由的上面
// app.use(getlog)

app.get('/' ,(req, res) => {
    res.send('/')
})

app.get('/home' , (req, res) => {
    res.send('/home')
})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Find</h1>')
})

// 监听3000端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动，正在监听3000端口。。。。")
})