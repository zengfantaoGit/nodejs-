const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    // 获取访问的路径
    const url = new URL(request.url,'https://www.bai.com')
    // 返回需求的本地文件路径
    console.log(`${__dirname}/${url.pathname}`)

    const readStream = fs.createReadStream(`${__dirname}/${url.pathname}`)
    readStream.on('data', chunk => {
        response.write(chunk)
    })

    readStream.on('end', () => {
        response.end()
    })
}).listen(9000, () => {
    console.log(__filename)
})