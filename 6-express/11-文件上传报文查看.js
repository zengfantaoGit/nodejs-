const express = require('express')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty');//引入connect-multiparty模块
const app = new express()

app.use((req,res,next)=>{
    //针对跨域进行配置，允许任何源访问
    res.header('Access-Control-Allow-Origin', "*")
    next()
})
// 设置静态路径
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json()); // 解析json数据格式
app.use(bodyParser.urlencoded({extended: true})); // 解析form表单提交的数据application/x-www-form-urlencoded
app.use(multipart());//解析form-data提交数据

app.post('/avatar',(req, res) => {
    console.log(req.body,req.params,req.query)
    res.send('上传成功！')
})


app.listen(3000, () => {
    console.log('开始监听3000端口')
})