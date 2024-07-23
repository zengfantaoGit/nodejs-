// 使用require的方式对外部模块进行引入，它的返回值为该模块暴露出的对象
const AAA = require('./module1')

const moudle = new AAA()
console.log(moudle)