// 引入express包
const express = require('express');
// 创建 express对象
const app = new express();
/*
*  路径参数配置需要用 : 做标识符 例如 ： /:id。
* 此时该传入的路径为路径参数（可获取）
*  由req.params.id 可以获取路径参数
* */

// 设置对应的路由规则，只有访问的路径和方法与设置的项相同时才会触发对应的回调函数
// 此时的路径参数为 id
app.get('/home/:id.html' , (req, res) => {
    // req.params.id获取路径参数id
    console.log(req.params.id)
    res.send(`您在查询${req.params.id}.html页面吗？`)
})

app.all('*' ,(req, res) => {
    res.send("<h1>给老子爬</h1>")
})



// 监听3000端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动，正在监听3000端口。。。。")
})