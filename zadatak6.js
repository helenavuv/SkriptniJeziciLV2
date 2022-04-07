import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [];
var parni = 0;
var neparni = 0;
for (var i=1;i<=100;i++)
{
    aBrojevi.push(dajSlucajanBroj(50,5000));
}
aBrojevi.forEach(function (broj){
    if (broj%2)
    {
        neparni++;
    }
    else{
        parni++;
    }
    
});

console.log("Ukupno je " + neparni + " neparnih brojeva i " + parni + " parnih brojeva.");