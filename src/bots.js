// Dependencies =========================
var
twit = require('twit'),
config = require('./config');

var Twitter = new twit(config.twitterKeys);

const retweet = require('./api/retweet')
const welcome = require('./api/welcome')
const findOpportunities = require('./api/findOpportunities')
const sendSlackMessage = require('./api/sendSlackMessage')

var hastag = '#cdr115'

/*
// grab & retweet as soon as program is running...
console.log('Antes de la función retweet')
retweet();
console.log('Despues de función retweet')
// retweet in every 5 minutes
setInterval(retweet, 300000);
*/
console.log('Antes welcome');

//welcome();
//setInterval(welcome, 60000)
console.log('despues welcome');

console.log('Antes de la función findOportunities')
//var since_id = findOpportunities();
//setInterval(() => findOpportunities(), 10000);
sendSlackMessage();
setInterval(() => sendSlackMessage(), 1200000);
// grab & retweet as soon as program is running...
//

//console.log('Despues de función findOportunities ' + since_id)
// retweet in every 5 minutes
//setInterval(() => findOpportunities(), 10000);
//setInterval(() => findOpportunities(), 10000)

// grab & 'favorite' as soon as program is running...
//favoriteTweet();
// 'favorite' a tweet in every 5 minutes
//setInterval(favoriteTweet, 300000);

// function to generate a random tweet tweet
function ranDom (arr) {
    var index = Math.floor(Math.random()*arr.length);
    return arr[index];
};
