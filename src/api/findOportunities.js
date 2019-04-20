// Dependencies =========================
var
twit = require('twit'),
config = require('../config');

var Twitter = new twit(config.twitterKeys);

var hastag = 'periodista'

// RETWEET BOT ==========================

// find latest tweet according the query 'q' in params

const findOportunities = () => {
//var retweet = function() {
    var params = {
    q: hastag,  // REQUIRED
    result_type: 'recent',
    lang: 'es'
    }
    
    Twitter.get('search/tweets', params, function(err, data) {
                // if there no errors
                
                if (!err) {
                    if(data.statuses.length == 0){
                        console.log('Tweets not found');
                    }
                    for(let i = 0; i < Math.min(data.statuses.length,1); i++){
                        // grab ID of tweet to retweet
                        var retweetId = data.statuses[i].id_str;
                        // Tell TWITTER to retweet
                        console.log('Founded twits '+retweetId);
                      
                    }
                }
                // if unable to Search a tweet
                else {
                console.log('Something went wrong while SEARCHING...');
                }
                });
}

module.exports = findOportunities;