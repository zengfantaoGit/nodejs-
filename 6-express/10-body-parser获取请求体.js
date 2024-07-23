// express 可以使用 body-parser 包处理请求体
const bodyParser = require('body-parser')
const express = require('express')
const app = new express()

// 设置中间件函数
let urlencoded = bodyParser.urlencoded({extended: false});
//处理 JSON 格式的请求体
let jsonParser = bodyParser.json();

app.get('/home', (req, res) => {
    console.log(req.query)
    res.send('ok')
})

// 设置路由中间件
app.post('/home', jsonParser, ({params, query, body}, res) => {
    // 此时可以使用req.body获取请求体内容
    console.log(params, query, body)
    res.send('ok1')
})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Find</h1>')
})

app.listen(3000, () => {
    console.log('当前服务器已经启动....')
})