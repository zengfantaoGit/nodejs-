/*
* fs.unlink(文件路径，回调函数) 可以删除指定目录下的文件（无法删除文件夹）
* 若该目录下的文件不存在，则会返回错误对象
*
* fs.rm(文件路径，回调函数）可以删除指定目录下的文件（无法删除文件夹）
* */

const fs = require('fs')
// fs.unlink('./音频/丑八怪1.mp3',error => {
//     if(error) {
//         console.log(error)
//         return;
//     }
//     console.log('删除成功！')
// })

fs.rm('./音频/丑八怪2.mp3',error => {
    if(error) {
        console.log(error)
        return;
    }
    console.log('删除成功！')
})