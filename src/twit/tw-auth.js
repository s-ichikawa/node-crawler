const CONSUMER_KEY = '';
const CONSUMER_SECRET = '';

var qs = require('querystring')
    , request = require('request')
    , oauth =
    { callback: 'http://devlab.tokyo'
        , consumer_key: CONSUMER_KEY
        , consumer_secret: CONSUMER_SECRET
    }
    , url = 'https://api.twitter.com/oauth/request_token'
    ;

request.post({url:url, oauth:oauth}, function (e, r, body) {
    // Ideally, you would take the body in the response
    // and construct a URL that a user clicks on (like a sign in button).
    // The verifier is only available in the response after a user has
    // verified with twitter that they are authorizing your app.

    if (e) {
        console.log(e);
        return;
    }

    // step 2
    var req_data = qs.parse(body)
    var uri = 'https://api.twitter.com/oauth/authenticate'
        + '?' + qs.stringify({oauth_token: req_data.oauth_token})
    // redirect the user to the authorize uri

    console.log(uri);
    console.log(req_data.oauth_token_secret);
})