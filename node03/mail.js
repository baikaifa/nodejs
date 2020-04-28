"use strict";
const nodemailer = require("nodemailer");

//创建发送邮件的对象

let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",//发送方邮箱 qq 通过lib/well-know/service.js
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '1956841815@qq.com', // 发送方邮箱地址
        pass: 'epwhyvswnwnweicj' // 验证码
    }
});

//邮件信息

let mailobj = {
    from: '"Fred Foo 👻" <1956841815@qq.com>', // sender address
    to: "1956841815@qq.com, baz@example.com", // list of receivers
    subject: "1902", // Subject line
    text: "您的验证码是12345678,有效期五分钟", // plain text body
    // html: "<b>Hello world?</b>" // html body
}


//发送邮件




//封装一个自定义模块，向固定的邮箱发送固定的信息

// xxx.send('mail', msg)


function send(mail, code) {
    let mailobj = {
        from: '"Fred Foo 👻" <1956841815@qq.com>', // sender address
        to: mail, // list of receivers
        subject: "1902", // Subject line
        text: `您的验证码是${code},有效期五分钟`, // plain text body
        // html: "<b>Hello world?</b>" // html body
    }


    return new Promise((resovle, reject) => {
        transporter.sendMail(mailobj, (err, data) => {
            if (err) {
                reject()
            } else {
                resovle()
            }
        });
    })


}

module.exports = { send }