/*
*   node.js中提供的js运行环境中是不存在dom(文件对象）与bom（浏览器对象）
* */
// console.log(window)   // window is not defined


// console.log(document)  // document is not defined

/*
*  但可以使用 console, setTimeOut等api
* */

/*
*  在node.js中，global对象相当于浏览器的window全局对象。内部配置了一些api方法，
*  其中在ES2020后又提供 globalThis来指向 node.js的顶级对象
* */

console.log(global === globalThis)   // true
