/*
* 流式写入。
*  const ws = fs.createWriteStream(文件路径, {flags: 'a'}）  追加方式写入
*  相当于在脚本与文件之间开启了一个管道。
*   脚本可在该管道源源不断的向目标文件输入数据
*   相比起writeFile方法更适用于大文件的写入
*
*   ws.write(数据）向文件中写入数据
*
*   ws.close() 关闭管道流
* */

const fs = require('fs')

const writeStream = fs.createWriteStream('../文本/流式写入.txt', {flags: 'a'})
writeStream.write('测试测试1\r\n')
writeStream.write('测试测试2\r\n')
writeStream.write('测试测试3\r\n')
writeStream.write('测试测试4\r\n')
writeStream.write('测试测试5\r\n')
writeStream.close()
