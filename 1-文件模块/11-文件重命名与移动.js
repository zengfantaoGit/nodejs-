/*
*  fs.rename(文件路径，修改文件路径，回调函数)
*  修改文件路径的文件名称与文件路径实现移动文件或者修改文件名称的效果
*
*  fs.renameSync(文件路径，修改文件路径)  同步操作文件路径
* */

const fs = require('fs')
// 文件名修改
// fs.rename('./文本/data.txt', './文本/数据.txt', error => {
//     console.log(error)
// })


// 文件移动
// fs.rename('./文本/数据.txt', './文本测试/数据.txt', error => {
//     console.log(error)
// })


// 同步文件移动
fs.renameSync('./文本测试/数据.txt', './文本/数据.txt')