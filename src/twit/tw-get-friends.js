var Twit = require('twit');

var T = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
});

T.get('friends/ids', {}, function (err, data, response) {
    var ids = data['ids'];
    getScreenName(ids);

    function getScreenName(ids) {
        while (ids.length > 0) {
            var user_id = data['ids'].splice(0, 100).join(',');
            T.get('users/lookup', {user_id: user_id}, function (err, users, response) {
                if (err) {
                    console.log(err);
                    return;
                }
                users.forEach(function (user) {
                    console.log(user.screen_name);
                })
            });
        }
    }
});

