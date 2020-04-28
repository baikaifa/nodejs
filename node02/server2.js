const express = require('express')
const app = express()
const cheerio = require('cheerio')


app.get('/user/login', (req, res) => {
    console.log('你好')
    res.send('注册ok')
})

app.listen(3001, () => {
    console.log('server start')
})

//http://www.baidu.com/user/hehe?us=123&ps=123
//http://localhost:3000