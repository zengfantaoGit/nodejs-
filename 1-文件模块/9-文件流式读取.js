/*
*  const readStream = fs.createReadStream(文件路径）
*
* readStream.on() 为文件流绑定特定事件
*  'data' 读取文件事件。每次读取默认从文件读取64kb的数据。均为异步操作
* */

const fs = require('fs')


const readStream = fs.createReadStream('./音频/丑八怪.mp3')
readStream.on('data', chunk => {
    console.log(chunk.length)
})

readStream.on('end', () => {
    readStream.close()
})