/*
1.请求网站数据
2.将数据保存本地文件

*/

const http = require('https')

const fs = require('fs')
const cheerio = require('cheerio')
let url = 'https://bbs.lol.qq.com/forum.php'
// let url = 'http://nodejs.org/dist/index.json'

http.get(url, (res) => {
    //安全判断
    const { statusCode } = res;//状态码
    const contentType = res.headers['content-type']//文件类型

    console.log(statusCode, contentType)

    let err = null

    if (statusCode != 200) {

        err = new Error('请求状态错误')

    } else if (!/^text\/html/.test(contentType)) {
        //格式类型是网页
        err = new Error('请求类型错误')
    }

    //err为真两个判断有一个出错

    if (err) {
        console.log(err)
        res.resume()//重置缓存
        return false
    }

    //数据分段 只要接受数据就会触发data事件 chunk 每次接受的数据片段 
    let rawData = ''
    res.on('data', (chunk) => {
        console.log('---------')
        rawData += chunk.toString('utf-8')
    })
    //数据流传输完毕
    res.on('end', () => {
        //将请求的数据保存到本地
        fs.writeFileSync('./bibi.html', rawData)
        console.log('数据传输完毕')
        //通过cheerio分析
        let $ = cheerio.load(rawData)//将请求的网页数据进行转化
        $('img').each(function (index, item) {
            console.log($(item).attr('src'))
        })
    })
}).on('error', (err) => {
    console.log('请求错误')
})



