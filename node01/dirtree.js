const fs = require('fs')


// fs.readdir('./node01', (err, dirs) => {
//     for (let i = 0; i < dirs.length; i++) {
//         console.log(dirs[i])
//     }
// })


fs.stat('./node01', (err, stats) => {
    if (stats.isFile) {
        console.log('is file')
    } else {
        console.log('is dir')
    }
})