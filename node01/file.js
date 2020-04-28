const fs = require('fs')

//创建覆盖写入文件
// fs.writeFile('name.txt', '今天天气不错123', (err) => {
//     console.log(err)
// })


//写入文件
// fs.appendFile('name.txt', '你好啊韩梅梅', (err) => {
//     console.log(err)
// })


//读取文件
// fs.readFile('name.txt', 'utf-8', (err, msg) => {
//     console.log(err)
//     console.log(msg)
//     // console.log(msg.toString('utf8'))
//     //默认读取二进制数据流 buffer

// })

//删除文件
fs.unlink('./name.txt', (err) => {
    console.log(err)
})






