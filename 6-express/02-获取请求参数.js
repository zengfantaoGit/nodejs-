const express = require('express');
const app = new express();

/*
*  express框架兼容原生的http获取参数方式
* */
app.get('/home' , (req, res) => {
    // 兼容原生属性
    // console.log(req.url)   // /home?w=1
    // console.log(req.httpVersion)  // 1.1
    // console.log(req.method)   // GET
    // console.log(req.headers)  // Object


    // 2. express 独有的获取报文的方式
    // 获取路径（不包含查询字符串）
    console.log(req.path)
    //获取查询字符串
    console.log(req.query); // 『相对重要』对象形式返回所有的查询字符串 {w : 1}
    // 获取指定的请求头
    console.log(req.get('host'));
    res.send('请求报文的获取');
})


// 监听3000端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动，正在监听3000端口。。。。")
})