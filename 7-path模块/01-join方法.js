/*
*  path.join(路径字符串)
*  可以将多个路径片段拼接成一个新的路径
* */

const path = require('path')

// ../ 会回退上一层的路径。最多回退上层的路径层数
let pathStr = path.join('/a', '/b/c', '../../../../', 'e')
console.log(pathStr)

let pathStr1 = path.join(__dirname, '牛魔王.txt')
console.log(pathStr1)