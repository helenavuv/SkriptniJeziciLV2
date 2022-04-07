import * as mqtt from 'mqtt';
import * as fs from 'fs';



var client = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', function() {
client.subscribe('temp')
});
console.log('Subsciber #1 is online!');
console.log('Receiving message...');
fs.appendFile('zadatak12.txt', '\n----------novo pokretanje-----------', function (err) {
    if (err) throw err;
   });
client.on('message', function(topic, message) {
    var context = message.toString();
    fs.appendFile('zadatak12.txt', context, function (err) {
         if (err) throw err;
        });
console.log(context)
});