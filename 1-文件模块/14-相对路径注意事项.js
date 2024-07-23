/*
*  代码写入的相对路径不是相对于脚本文件的所处路径，而是终端路径的相对路径
* */
const fs = require('fs')

// fs.writeFile('./还好.txt','你好', error => {
//     console.log(error)
// })

/*
*  全局变量__dirname记录脚本文件所处目录的绝对路径。。。
* */
console.log(__dirname)