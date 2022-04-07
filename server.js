import * as http from 'http';

var nPort = 8008;
var sIme = "Helena Jerbic";
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(sIme);
response.end();
}).listen(nPort);