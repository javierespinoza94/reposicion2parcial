
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');

const token = '513151795:AAFs72K8QJTuMhKs-AHE-uxSwmfXxKRRGJw';


var serialport = require("serialport");
var miSerial = new serialport("COM3", {
  baudRate: 9600,
  autoOpen: true
});

const bot = new TelegramBot(token, {
  polling: true,
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El id es " + chatId)
  var respuesta = msg.text;
  if (respuesta == "reiniciar") {
    console.log("Reiniciando");
    bot.sendMessage(chatId, 'Reiniciando');
    miSerial.write("R");
  }else if(respuesta == "mostrar")
  {
    miSerial.write("M");
//bot.sendMessage(chatId, 'El valor actual del contador es: ');
  }
});

var idChat = 513739207;

miSerial.setEncoding('utf8');
miSerial.on('data', function(data) {
  console.log('Data:', data);
  bot.sendMessage(idChat, "El valor del contador es:" +  data) ;

});
