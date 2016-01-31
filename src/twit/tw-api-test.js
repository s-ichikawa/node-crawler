var Twit = require('twit');

var T = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
});

var stream = T.stream('statuses/filter', {track: 'javascript'});
stream.on('tweet', function (tw) {
    var text = tw.text;
    var user_name = tw.user.name;
    console.log(user_name + '> ' + text);
});