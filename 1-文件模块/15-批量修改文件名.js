
const fs = require('fs')

fs.readdir('./', (error, data) => {
    console.log(data)
    for(let item of data) {
        if (item[0] === '0') {
            fs.rename(`./${item}`,`./${item.substring(1)}`, error => {
                console.log(error)
            })
        }
        // console.log(item)
    }
})