const test = require('./test')
// 第二次导入时，由于第一次导入的结果存入缓存，则不会再次执行原模块
require('./test')
// test()