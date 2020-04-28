const fs = require('fs')
// fs.mkdir('./test',(err,data) => {
//     console.log(err)
//     console.log(data)
// })


//更改
// fs.rename('./test', './test01', (err) => {
//     if (err) {
//         console.log('更改失败')
//     } else {
//         console.log('ok')
//     }
// })


//删除
fs.rmdir('./test01', (err) => {
    if (err) {
        console.log('删除失败')
    } else {
        console.log('ok')
    }
})
