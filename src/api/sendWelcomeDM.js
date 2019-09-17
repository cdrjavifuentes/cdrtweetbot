// Dependencies =========================
var
twit = require('twit'),
config = require('../config');

var Twitter = new twit(config.twitterKeys);

var new_followers_id = [
    215250945,215250945,215250945,215250945,215250945,215250945,215250945,215250945,215250945,215250945
    ];

// WELCOME BOT ==========================

// Send a DM to new followers



//Add comment  1

 function  sendWelcomeDM  () {
    
    
    
    for(let i = 0; i< new_followers_id.length; i++){


        // Twitter.get('followers/ids', params, function(err, data) {

        //if (!err) {
            //if(data.users.length == 0){
                //console.log('User not found');
            //}
            //else{
                //for (let j = 0; j< data.users.length; j++){

                    var tText = 'Hola,\n'
                    tText = tText + '\n'
                    tText = tText + 'Te escribimos para darte la bienvenida a la comunidad de Reportaro. Somos una startup que ayuda a poner en contacto a periodistas con fuentes para sus artículos.\n'
                    tText = tText + 'Contamos con fuentes para las secciones habituales en los medios, especialmente para tecnología, economía, energía, salud y medio ambiente y ya colaboramos con compañeros tuyos en medios como El Mundo, Cadena Ser, el País, 20 Minutos, etc... .\n'
                    tText = tText + 'Te explico como funciona por si en el futuro puede ser de tu utilidad:\n'
                    tText = tText + 'Entras en https://bit.ly/2ZJTWi0 y rellenas el formulario para que podamos entender en qué consiste tu contenido y qué tipo de fuente te encajaría.\n'
                    tText = tText + '\n'
                    tText = tText + 'A medida que recibamos respuestas de perfiles cualificados para participar en tu reportaje, te los haremos llegar por email a la dirección que nos indiques.\n'
                    tText = tText + '\n'
                    tText = tText + 'Tú decides con cuáles contactar y ampliar información. No hay compromiso de que las contactes, únicamente que los cites en tu artículo si utilizas la información que te han proporcionado.\n'
                    tText = tText + '\n'
                    tText = tText + 'Al cabo de unos días, recibirás un correo nuestro para pedirte feedback, te agradeceremos que nos contestes y nos cuentes qué tal ha ido.\n'
                    tText = tText + '\n'
                    tText = tText + 'Cualquier duda, contáctanos y te la resolvemos.\n'
                    tText = tText + '\n'
                    tText = tText + 'Saludos,\n'
                    tText = tText + '\n'
                    tText = tText + 'Equipo Reportaro'
                    
                         // reply object
                    var replyTo = 
                          {"event": 
                             {"type": "message_create", 
                              "message_create": 
                                  {"target": 
                                     {"recipient_id": new_followers_id[i] }, 
                                     "message_data": 
                                        {"text": tText}
                                  }
                             }
                         }
            
                        console.log("Reportaro says: " + replyTo +" to "+new_followers_id[i]);
                         Twitter.post('direct_messages/events/new',replyTo)
                        console.log("After Post ");
                        var seconds = 60;
                        //var waitTill = new Date(new Date().getTime() + seconds * 1000);
                        //while(waitTill > new Date()){}
                         
                        console.log("Continue ");
                        

                //}
            //}
        //}else{
            //console.log('Something went wrong while SEARCHING...');   
        //} 
//});


    }
};

module.exports = sendWelcomeDM