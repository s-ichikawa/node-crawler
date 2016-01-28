var Twit = require('twit');

var T = new Twit({
    consumer_key: 'nrf90mbHBhCFt6H8xkUl1Hcj2',
    consumer_secret: 'yBpwpQT1nzG0fml5Y75ETmEqhiVZYb0XqPrBCZf8ZeVt5waFlI',
    access_token: '1032459463-nd4ZTRx2E4Y2bDwrhplUtm2Wk8HzZ2LBjWc7J10',
    access_token_secret: 'D6qvPi2yBAlXcIRS2zf48uX6VJlWri2FTdXEwkVtbrThW'
});

var stream = T.stream('statuses/filter', {track: 'dots'});
stream.on('tweet', function (tw) {
    var text = tw.text;
    var user_name = tw.user.name;
    console.log(user_name + '> ' + text);
});