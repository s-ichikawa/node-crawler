var url = require('url');

var base = "http://kujirahand.com/url/test/index.html";
var u1 = url.resolve(base, 'a.html');
console.log("u1:" + u1);
var u2 = url.resolve(base, '../b.html');
console.log("u2:" + u2);
var u3 = url.resolve(base, '/c.html');
console.log("u3:" + u3);
