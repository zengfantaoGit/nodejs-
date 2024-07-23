// 使用require导入npm的包，它会先从当前文件目录下的node_modules文件夹下查找
// 否则回向上级目录继续查找

const uniq = require('uniq')
const jquery = require('jquery');
console.log(uniq([1,2,1,2,3,4,0,2,78]))