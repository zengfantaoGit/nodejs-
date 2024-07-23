/*
*  JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
*
* Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
*
* 原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
* */


// Buffer.alloc(length) 开辟一个长度为length的二进制数组地址，并且对该块内存的二进制数据进行清零操作
// const arr = Buffer.alloc(10)
// console.log(arr)

// Buffer.allocUnsafe(length) 开辟一个长度为length的二进制数组地址，但不会对该块内存的二进制数据进行清零操作。
/*备注：Buffer二进制数据每个数据都是以16进制给出，方便阅读*/
// const arr = Buffer.allocUnsafe(10000)
// console.log(arr)

// Buffer.from(str / Array) 将序列的每个元素转换成二进制码存储，并于16进制输出
// const arr = Buffer.from('JavaScript')  // <Buffer 4a 61 76 61 53 63 72 69 70 74> 对应每个字符的ascll码值，以16进制给出
// console.log(arr)


// 若数组存在字符则以 00 输出，若数组内的数值超过255，则会进行256区域操作来进行二进制转码
const arr = Buffer.from([124,'a',213,1025])
console.log(arr)





