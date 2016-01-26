var client = require('cheerio-httpcli');
var URL = require('url');

var url = "https://www.amazon.co.jp/s/ref=nb_sb_ss_c_0_6?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=megadeth&sprefix=megadeth%2Caps%2C219&rh=i%3Aaps%2Ck%3Amegadeth";
var param = {};
client.fetch(url, param, function (err, $, res) {
    if (err) {
        console.log(err);
        return false;
    }
    $('img').each(function (idx) {
        var src = $(this).attr('src');
        src = URL.resolve(url, src);
        console.log(src);
    })

});