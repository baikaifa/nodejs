const express = require('express')
const app = express()

const bodypaser = require('body-parser')
const Mail = require('./mail')
app.use(bodypaser.urlencoded({ extended: false }))
console.log(Mail)
app.use(bodypaser.json())

//发送验证码

app.post('/getMailCode', (req, res) => {
    let { mail } = req.body
    let code = parseInt(Math.random() * 10000)//产生随机码
    Mail.send(mail, code)
        .then(() => {
            res.send({ err: 0, msg: '验证码发送ok' })
        })
        .catch((err) => {
            res.send({ err: -1, msg: '验证码发送失败' })
        })
})

app.listen(3000, () => {
    console.log('server start')
})