/*
*  fs.readFile(文件路径，[转换编码]，回调函数）
*   回调函数中存在两个参数，第二个参数代表读取的数据。
*   若readFile函数未配置转换编码，则会以 Buffer 的二进制数组输出
*
*   fs.readFileSync(文件路径，[转换编码])  return Buffer数组
*   异步读取文件
* */

const fs = require('fs')
// fs.readFile('./文本/data.txt', (err,data) => {
//     console.log(data)
//     /*<Buffer 74 65 73 74 0d 0a 6c 65 61 72 6e 69 6e 67 0d 0a 77 61 69 74 69 6e 67>*/
//     console.log(data.toString())
// })

const ans = fs.readFileSync('./文本/data.txt')
console.log(ans)
//<Buffer 74 65 73 74 0d 0a 6c 65 61 72 6e 69 6e 67 0d 0a 77 61 69 74 69 6e 67>