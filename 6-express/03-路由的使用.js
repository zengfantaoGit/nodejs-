//导入 express
const express = require('express');

//创建应用对象
const app = express();

// 路由的查询是自上到下的进行查询，所以
/*
*  app.all("*", (req, res) => {
    res.send('<h1>404 Not Found</h1>')
});
*  必须放置到代码最末尾处，否则会优先匹配该路由
* */

//创建 get 路由
app.get('/home', (req, res) => {
    res.send('网站首页');
});

//首页路由
app.get('/', (req,res) => {
    res.send('我才是真正的首页');
});

//创建 post 路由
app.post('/login', (req, res) => {
    res.send('登录成功');
});

//匹配所有的请求方法
app.all('/search', (req, res) => {
    res.send('1 秒钟为您找到相关结果约 100,000,000 个');
});

//自定义 404 路由
app.all("*", (req, res) => {
    res.send('<h1>404 Not Found</h1>')
});

//监听端口 启动服务
app.listen(3000, () =>{
    console.log('服务已经启动, 端口监听为 3000');
});