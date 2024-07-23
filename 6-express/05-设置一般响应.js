// 引入express包
const express = require('express');
// 创建 express对象
const app = new express();
/*
*  express框架兼容原生http模块设置响应的方式
* */


// 设置对应的路由规则，只有访问的路径和方法与设置的项相同时才会触发对应的回调函数
app.get('/home' , (req, res) => {
    // http原生响应
    // res.statusCode = 404
    // res.statusMessage = 'love you'
    // res.setHeader('content-type', 'text/html;charset=utf-8')
    // res.setHeader('xxx', 'yyy')
    // res.write('你好呀')
    // res.end()

    //express框架响应
    res.status(404)   //设置状态码
    res.set('xxx','yyyy')   //设置响应头
    res.send('你好呀 ，aaa')   //设置响应体，兼容汉字转码
})
// 监听3000端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动，正在监听3000端口。。。。")
})