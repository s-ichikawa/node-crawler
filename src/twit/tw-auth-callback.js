const CONSUMER_KEY = '';
const CONSUMER_SECRET = '';

var qs = require('querystring')
    , request = require('request');

// step 3
// after the user is redirected back to your server
var auth_data = qs.parse('?oauth_token=vUapmgAAAAAAikilAAABUpCimc4&oauth_verifier=sDO9HgooJaDo9gk3q4LhOBoVp2A2RFue')
    , oauth =
    {
        consumer_key: CONSUMER_KEY
        , consumer_secret: CONSUMER_SECRET
        , token: auth_data.oauth_token
        , token_secret: 'rRKf2m7sOM0ooh9nociYB4oBmVXAbJjg'
        , verifier: auth_data.oauth_verifier
    }
    , url = 'https://api.twitter.com/oauth/access_token'
    ;

request.post({url: url, oauth: oauth}, function (e, r, body) {
    console.log(body);
    // ready to make signed requests on behalf of the user
    var perm_data = qs.parse(body)
        , oauth =
        {
            consumer_key: CONSUMER_KEY
            , consumer_secret: CONSUMER_SECRET
            , token: perm_data.oauth_token
            , token_secret: perm_data.oauth_token_secret
        }
        , url = 'https://api.twitter.com/1.1/users/show.json'
        ;
    var query =
        {
            screen_name: perm_data.screen_name
            , user_id: perm_data.user_id
        }
        ;

    request.get({url: url, oauth: oauth, qs: query, json: true}, function (e, r, user) {
        console.log(user)
    })
})
