const express = require('express')
const app = express()
const cheerio = require('cheerio')


app.get('/user/login', (req, res) => {
    //接受get 参数 query
    console.log(req.query)
    console.log('你好')
    let { us, ps } = req.query
    //处理数据
    if (us === 'wangyi' && ps === 456) {
        res.send({ err })
    } else {
        res.send({ err: -1, msg: 'us pass no ok' })
    }

})

app.listen(3000, () => {
    console.log('server start')
})

//http://www.baidu.com/user/hehe?us=123&ps=123
//http://localhost:3000


/*
api 接口的构成要素
ip
port
pathname
methood get post
接受用户传递数据

*/