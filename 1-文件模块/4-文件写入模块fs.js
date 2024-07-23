/*
*  fs为node.js内置的文本读入模块，而该模块需要自己提前引入到js脚本内
*  const read = require('fs') 引入文件读入模块
*  read.writeFile(文件路径，写入内容，回调函数） 进行写入操作。
*   备注：若文件路径中某些文件夹不存在，会直接返回 no such director 错误
*         而不存在该文件，则会自动创建该文件。（而且是覆盖写入操作）
*         回调函数内，若写入成功则 err 变量为 null, 否则会携带错误信息
*          相对路径时，在终端运行时候会根据终端开启的文件目录拼接相对路径得到对应路径
* */

const write = require('fs')
write.writeFile(`${__dirname}/测试.txt`,'你就是歌姬sad', err => {
    console.log(err)
})

// 获取当前文件下的文件路径，不随终端目录的位置影响
console.log(__dirname)