/*
    需要提前使用npm i axios进行引入包
*  axios是一个基于Promise的HTTP客户端，用于浏览器和node.js。
* 它支持Promise API，拦截请求和响应，转换请求和响应数据，取消请求，自动转换JSON数据，以及客户端支持防止CSRF/XSRF。
* */
const axios = require('axios')
const fs = require('fs')
axios.get('https://autumnfish.cn/song/detail?ids=476081899').then(({ data: {songs: [song]} }) => {
    // 创建文件写入流
    // console.log(song)
    const writeStream = fs.createWriteStream(`./文件/${song.tns[0]}.json`);
    // 写入文件，json数据写入时必须用 JSON.stringify方法转换成字符串形式存入
    writeStream.write(JSON.stringify(song))
    writeStream.close()
})

const readStream = fs.createReadStream('./文件/恋如雨止.json')
readStream.on('data', chunk => {
    console.log(chunk.toString())
})