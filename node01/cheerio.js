const cheerio = require('cheerio')
let $ = cheerio.load('<div><p>你好</p><img src="http://ww.baidu.com"></div>')
//将一组html格式的字符串 转换为类dom 之后可以通过jq的语法选中其中的元素
// console.log($('img').attr('src'))
// console.log($('p').text())

$('img').each(function(index,item){
    console.log($(item).attr('src'))
})