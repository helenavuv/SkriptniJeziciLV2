import dajSlucajanBroj from './slucajanBroj.js';
import * as http from 'http';

var sIspis="";
var aBrojevi  =[];
for (var i=1;i<=10;i++)
{
    aBrojevi.push(dajSlucajanBroj(10,100));
}

sIspis=aBrojevi.join("\n");

var nPort = 8008;
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(sIspis);
response.end();
}).listen(nPort);