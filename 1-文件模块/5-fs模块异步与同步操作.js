/*
* 异步：在执行特定耗时操作时，会将这些操作放入其他线程中。
*  处理完成的回调函数会压入事件栈中
*
* */

const fs = require('fs')
// 异步执行，回调函数压入事件栈内

/*
* 2
  null
* */

// fs.writeFile('./测试.txt','测试',err => {
//     console.log(err)
// })
//
// console.log(1 + 1)


// 同步执行函数。进行读入操作时整个脚本处于静止状态
fs.writeFileSync('./data.txt','test', err => {
    console.log(err)
})

console.log(1 + 1)
