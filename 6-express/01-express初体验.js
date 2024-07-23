// 引入express包
const express = require('express');
// 创建 express对象
const app = new express();
// 设置对应的路由规则，只有访问的路径和方法与设置的项相同时才会触发对应的回调函数
app.get('/home' , (req, res) => {
    res.end('/home')
})
// 监听3000端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动，正在监听3000端口。。。。")
})