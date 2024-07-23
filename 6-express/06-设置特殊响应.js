// 引入express包
const express = require('express');
// 创建 express对象
const app = new express();

const path = require('path')



// 设置对应的路由规则，只有访问的路径和方法与设置的项相同时才会触发对应的回调函数
app.get('/' , (req, res) => {
    // 重定向，本质是返回一次响应，浏览器拿着这次响应结果向另外一个地址发送请求
    // res.redirect('http://www.baidu.com')

    // 下载响应，响应过去的文件浏览器会自动进行下载
    // res.download(__dirname + '\\package.json')

    //json响应，浏览器会自动拿到的响应转换成json字符串
    // res.json({
    //     name: '牛魔',
    //     age: 32
    // })

    //文件响应
    res.sendFile(path.resolve(__dirname, './login.html'))
})


// 监听3000端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动，正在监听3000端口。。。。")
})