
const fs = require('fs')

// 1.流式读取写入
const readStream = fs.createReadStream('./音频/丑八怪.mp3')
const writeStream = fs.createWriteStream('./音频/丑八怪1.mp3');
//
// readStream.on('data', chunk => {
//     writeStream.write(chunk)
// })
//
// readStream.on('end', () => {
//     writeStream.close()
//     readStream.close()
// })

// 使用readeStream对象提供的 pipe管道方法，将自身读取的数据流入writeStream对象文件内
readStream.pipe(writeStream)

// 2. 同步读取写入文件
// const readFileSync = fs.readFileSync('./音频/丑八怪.mp3')
// fs.writeFileSync('./音频/丑八怪2.mp3', readFileSync)
