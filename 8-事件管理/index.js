// 类似document.addEventListen。eventEmitter对象也是通过绑定事件并在特定时机异步运行的方式
// 引入Events包
const events = require('events')
// 创建事件对象
const eventEmitter = new events.EventEmitter()
//  绑定事件
eventEmitter.on('speak',(msg) => {
    console.log(msg)
})

// 触发事件
eventEmitter.emit('speak','hello')

