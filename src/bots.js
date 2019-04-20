// Dependencies =========================
var
twit = require('twit'),
config = require('./config');

var Twitter = new twit(config.twitterKeys);

const retweet = require('./api/retweet')
const welcome = require('./api/welcome')
const findOportunities = require('./api/findOportunities')

var hastag = '#cdr115'

/*
// grab & retweet as soon as program is running...
console.log('Antes de la función retweet')
retweet();
console.log('Despues de función retweet')
// retweet in every 5 minutes
setInterval(retweet, 300000);

console.log('Antes welcome');

welcome();
setInterval(welcome, 60000)
console.log('despues welcome');
*/

// grab & retweet as soon as program is running...
console.log('Antes de la función findOportunities')
findOportunities();
console.log('Despues de función findOportunities')
// retweet in every 5 minutes
setInterval(findOportunities, 300000);


// grab & 'favorite' as soon as program is running...
//favoriteTweet();
// 'favorite' a tweet in every 5 minutes
//setInterval(favoriteTweet, 300000);

// function to generate a random tweet tweet
function ranDom (arr) {
    var index = Math.floor(Math.random()*arr.length);
    return arr[index];
};
