var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var URL = require('url');

var savedir = __dirname + '/../out/';
if (!fs.existsSync(savedir)) {
    fs.mkdirSync(savedir);
}

var url = "http://www.amazon.co.jp/";
var param = {};
client.fetch(url, param, function(err, $, res) {
    if (err) {
        console.log(err);
    }
    $('img').each(function(idx) {
        var src = $(this).attr('src');
        if (!src) return;
        src = URL.resolve(url, src);
        console.log(src);
        var fname = URL.parse(src).pathname;
        fname = savedir + '/' + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');
        request(src).pipe(fs.createWriteStream(fname));
    })
});