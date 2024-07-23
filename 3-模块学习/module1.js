/*
*  将一个复杂的程序文件依据一定规则（规范）拆分成多个文件的过程称之为 模块化

    其中拆分出的 每个文件就是一个模块，模块的内部数据是私有的，不过模块可以暴露内部数据以便其他模块使用
    *
    * 下面是模块化的一些好处：

        防止命名冲突

        高复用性

        高维护性
* */
function AAA() {
    this.num = 1
}

// 每个文件的内容都是私有的，若需要被其他文件使用则需要进行暴露操作
// 返回一个对象
module.exports = AAA

/*模块暴露数据的方式有两种：

// 返回 value
module.exports = value

// 返回一个对象 {name: value}
exports.name = value

module.exports 可以暴露 任意 数据

不能使用 exports = value 的形式暴露数据，模块内部 module 与 exports 的隐式关系 exports = module.exports = {} ，

require 返回的是目标模块中 module.exports 的值*/

