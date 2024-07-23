
const fs = require('fs')
/*
*  创建目录：fs.mkdir(目录路径，回调函数）
*  但路径前面的文件夹不存在则会抛出异常
*   此时需要配置 { recursive: true } 表示递归生成目录
* */

// fs.mkdir('./我的文件夹/你的文件',{ recursive: true }, error => {
//     console.log(error)
// })

/*
*  读取文件资源 fs.readdir(目录路径，回调函数)，
*   此时回调函数的第二个参数表示该目录下所有的文件与文件夹的名称
* */

// fs.readdir('./文本', (error, data) => {
//     console.log(data)
// })

/*
*  删除文件夹 fs.rmdir(path, callback)
*  若文件夹不存在则会抛出异常。
*   若文件夹不为空也会抛出异常 （此时需要配置 { recursive: true } 来表示递归删除目录）
* */

// In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, {
// recursive: true }) instead
// fs.rmdir('./音频/撒旦',{ recursive: true }, error => {
//     console.log(error)
// })

// fs.mkdir('/a', error => {
//     console.log(error)
// })

// fs.readdir('/a', (error, data) => {
//     if(error) {
//         console.log(error)
//     }else {
//         console.log(data)
//     }
// })

// fs.rmdir('/a', {recursive: true}, error => {
//     console.log(error)
// })

const readStream = fs.createReadStream('/a.jpg')
readStream.on('data', (chunk) => {
    console.log(chunk.toString())
})