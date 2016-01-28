var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var path = require('path');
var URL = require('url');

var LINK_LEVEL = 2;

var TARGET = "http://peatix.com/search?lang=ja";
var list = {};

downloadRec(TARGET, 0);

function downloadRec(url, level) {
    if (level > LINK_LEVEL) return;

    if (list[url]) return;
    list[url] = true;

    var us = TARGET.split("/");
    us.pop();

    var base = us.join('/');
    if (url.indexOf(base) < 0) return;

    client.fetch(url, {}, function(err, $, res) {
        $('a').each(function (idx) {
            var href = $(this).attr('href');
            if (!href) return;
            href = URL.resolve(url, href).replace(/\#.*$/, '');
            downloadRec(href, level + 1);
        });

        if (url.substr(url.length-1, 1) == '/') {
            url += "index.html";
        }
        var savepath = url.split("/").slice(2).join("/");
        checkSaveDir(savepath);
        console.log(savepath);
        //fs.writeFileSync(savepath, $.html());
    });
}

function checkSaveDir(savepath) {
    var dir = path.dirname(savepath);
    var dirlist = dir.split('/');
    var p = '';
    for (var i in dirlist) {
        p += dirlist[i] + '/';
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
}