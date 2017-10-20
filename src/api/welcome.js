// Dependencies =========================
var
twit = require('twit'),
config = require('../config');

var Twitter = new twit(config);

var old_followers = [];

// WELCOME BOT ==========================

// Send a DM to new followers

const welcome = ()  =>{
    
    var params = {
        screen_name: '115cdr'
    
    }
    
    Twitter.get('followers/list', params, function(err, data) {
    
        if (!err) {
            if(data.statuses.length == 0){
                console.log('User not found');
            }
            else{
                for (let i = 0; i<= data.statuses.length; i++){
                    
                    var follower = data.statuses[i].id_str;
                    old_followers.push(follower);
                    console.log('New follower added ')
                }
                
            }
        }else{
            console.log('Something went wrong while SEARCHING...');   
        }
        
        console.log(old_followers.length);
        for (let i= 0; i<= old_followers.length; i++){
            console.log(old_followers[i])
            
        }
        
        
    }
}

module.exports = welcome