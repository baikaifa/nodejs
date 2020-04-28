// 连接数据库

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/houtai', {
  useNewUrlParser:
    true, useUnifiedTopology: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('db ok')
});

//schema 对象
//创建一个和集合相关的schema 对象 类似表头

