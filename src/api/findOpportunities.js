// Dependencies =========================
var
twit = require('twit'),
config = require('../config');

var Twitter = new twit(config.twitterKeys);

var hastag = 'estoy haciendo un reportaje'
var valor = 1;

// RETWEET BOT ==========================

// find latest tweet according the query 'q' in params

const findOpportunities = () => {
//var retweet = function() {

    var params = {
    q: hastag,  // REQUIRED
    result_type: 'recent',
    lang: 'es',
    since_id : valor,
    tweet_mode: 'extended'
    }

    
    console.log('valor '+valor);
    var new_min_value = valor;

    /*
    estoy haciendo un reportaje
estoy haciendo un artículo
preparando reportaje
preparando un artículo
escribiendo reportaje
soy periodista y
es para un reportaje
grabando podcast
preparando podcast
me gustaría entrevistar
escribiendo post
    */
    
    Twitter.get('search/tweets', params, function(err, data) {
                // if there no errors
                
                if (!err) {
                    if(data.statuses.length == 0){
                        console.log('Tweets not found');
                    }
                    console.log('Founded '+data.statuses.length+ ' twits');
                    for(let i = 0; i < data.statuses.length; i ++){
                        // grab ID of tweet to retweet
                        var retweetId = data.statuses[i].id_str;
                        if(new_min_value < retweetId){
                            new_min_value = retweetId;
                            console.log('New min Value '+new_min_value);
                        }
                        var text = data.statuses[i].text;
                        var fullText = data.statuses[i].full_text;
                        var userName = data.statuses[i].user.name;
                        var userDescription = data.statuses[i].user.description;
                        var userLocation = data.statuses[i].user.location;
                        // Tell TWITTER to retweet
                        //console.log('Founded twits '+retweetId);
                        //console.log(' text '+ text );
                        console.log(' fullText '+ fullText );
                        sendSlackMessage(fullText);
                        //console.log(' from '+ userName );
                        //console.log(' description '+ userDescription );
                      
                    }
                }
                // if unable to Search a tweet
                else {
                console.log('Something went wrong while SEARCHING...');
                }
                });
    
    valor = new_min_value;
    return new_min_value;
}

module.exports = findOpportunities;