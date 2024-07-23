/*
*  appendFile(文件路径，追加内容，回调函数)
*   异步追加写入文件数据
*
*   appendFileSync(文件路径，追加内容）
*   同步追加写入文件数据
*
*   在writeFile的配置项中配置 flag: 'a' 表示文件写入方式为追加
*   writeFile(文件路径，追加内容，{flag: 'a'},回调函数)
* */
const fs = require('fs')

// fs.appendFile('./文本/追加文本.txt','测试代码\r\n' ,err => {
//     console.log(err)
// })

// 同步追加写入
// fs.appendFileSync('./文本/追加文本.txt','测试代码\r\n')

fs.writeFile('./文本/追加文本.txt','测试代码\r\n', {flag: 'a'}, err => {
    console.log(err)
})
