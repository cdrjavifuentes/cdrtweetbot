var request = require('request');

var webHookURL = 'https://hooks.slack.com/services/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';

var payLoad = {
    text: 'Mensaje enviado a Slack a las ' + getFormatedDate()
    };



const sendSlackMessage = () => {

    var requestOptions = {
        uri: webHookURL,
        method : 'POST',    
        body: JSON.stringify(payLoad )
    
    };

    console.log('Mensaje ' + requestOptions.body)
    request(requestOptions);

}
module.exports = sendSlackMessage;

function getFormatedDate(){
var dateNow=new Date();
// cogemos la fecha utc
var dateUTC=new Date(dateNow.getUTCFullYear(), dateNow.getUTCMonth()+1, dateNow.getUTCDate(), dateNow.getUTCHours(), dateNow.getUTCMinutes(), dateNow.getUTCSeconds())

// Definimos la diferencia en horas del time zone
// Para la diferencia horaria de dos horas y media seria 2.5
var tz=+2;

// Calculamos los segundos de la zona horaria
var seconds=(tz*60*60)*1000;

dateUTC.setTime(dateUTC.getTime()+seconds);

var dateUTC_getDate = dateUTC.getDate();
var dateUTC_getDate_str;
if (dateUTC_getDate < 10){
  dateUTC_getDate_str = "0" + dateUTC_getDate;
}else{
  dateUTC_getDate_str = dateUTC_getDate;
}
  
var dateUTC_getMonth = dateUTC.getMonth();
var dateUTC_getMonth_str;
if (dateUTC_getMonth < 10){
  dateUTC_getMonth_str = "0" + dateUTC_getMonth;
}else{
  dateUTC_getMonth_str = dateUTC_getMonth;
}

var dateUTC_getHours = dateUTC.getHours();
var dateUTC_getHours_str;
if (dateUTC_getHours < 10){
  dateUTC_getHours_str = "0" + dateUTC_getHours;
}else{
  dateUTC_getHours_str = dateUTC_getHours;
}

var dateUTC_getMinutes = dateUTC.getMinutes();
var dateUTC_getMinutes_str;
if (dateUTC_getMinutes < 10){
  dateUTC_getMinutes_str = "0" + dateUTC_getMinutes;
}else{
  dateUTC_getMinutes_str = dateUTC_getMinutes;
} 

return dateUTC_getDate_str+"/"+(dateUTC_getMonth_str)+"/"+dateUTC.getFullYear()+" "+dateUTC_getHours_str+":"+dateUTC_getMinutes_str;

}

