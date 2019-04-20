var request = require('request');

var webHookURL = 'https://hooks.slack.com/services/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';

var payLoad = {
    text: 'Mensaje enviado a Slack'
    };



const sendSlackMessage = () => {

    var requestOptions = {
        uri: webHookURL,
        method : 'POST',    
        body: JSON.stringify(payLoad)
    
    };

    
    request(requestOptions);

}
module.exports = sendSlackMessage;


