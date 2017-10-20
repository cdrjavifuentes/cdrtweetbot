// Dependencies =========================
var
twit = require('twit'),
config = require('./config');

var Twitter = new twit(config);

const retweet = require('./api/retweet')
const welcome = require('./api/welcome')

var hastag = '#cdr115'

// grab & retweet as soon as program is running...
console.log('Antes de la función retweet')
retweet();
console.log('Despues de función retweet')
// retweet in every 5 minutes
setInterval(retweet, 300000);

console.log('Antes welcome');

welcome();
console.log('despues welcome');



// grab & 'favorite' as soon as program is running...
//favoriteTweet();
// 'favorite' a tweet in every 5 minutes
//setInterval(favoriteTweet, 300000);

// function to generate a random tweet tweet
function ranDom (arr) {
    var index = Math.floor(Math.random()*arr.length);
    return arr[index];
};
