import dajSlucajanBroj from './slucajanBroj.js';
import * as mqtt from 'mqtt';



var client = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', function() {
console.log('Publisher is online!');
setInterval(function() {
var temp = dajSlucajanBroj(10,1000);
client.publish('temp', '\nRandom broj: ' + temp);
console.log('Message sent!');
}, 5000);
});