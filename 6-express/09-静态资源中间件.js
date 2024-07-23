// 引入express包
const express = require('express');
// 创建 express对象
const app = new express();
const path = require('path')

// 静态资源中间件，配置之后每次请求会优先与当前的静态路径进行匹配，如果匹配成功则会返回静态文件夹下的资源.
// 相当于每次请求先拦截匹配再返回

/*
*  注意事项:
        index.html 文件为默认打开的资源
        如果静态资源与路由规则同时匹配，谁先匹配谁就响应
        路由响应动态资源，静态资源中间件响应静态资源
* */

// 这段被解开，则会优先匹配该路由路径，静态资源会被拦截
// app.get('/html/index.html', (req, res) => {
//     res.send('哈哈哈，被拦截了')
// })
app.use(express.static(__dirname + '/public'))

// 设置对应的路由规则，只有访问的路径和方法与设置的项相同时才会触发对应的回调函数
app.all('*', (req, res) => {
    res.send('<h1>404 Not Find</h1>')
})




// 监听3000端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动，正在监听3000端口。。。。")
})