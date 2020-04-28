const fs = require('fs')
//同步读取文件 在关键位置捕获错误信息


try {
    let dirs = fs.readdirSync('./node02')
    console.log(dirs)
} catch (err) {
    console.log('出错了')
    console.log(err)
}




// let dirs = fs.readdirSync('./', () => {
//     console.log(dirs)
// })



//异步读取
// fs.readdir('../node02', (err, data) => {
//     console.log(err)
//     console.log(data)
//     if (err) {//err 有错误
//         console.log('读取错误')
//     } else {
//         console.log(data)
//     }
// })

//错误的回调优先 在回调函数中第一个参数表示错误对象 默认为null 如果出现err 就是错误对象

/*
 错误处理同步 :try catch 异步:错误回调优先
 文件夹的操作
 curd
*/
