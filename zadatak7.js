import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [];
for (var i=1;i<=200;i++)
{
    aBrojevi.push(dajSlucajanBroj(150,1500));
}

var najmanji = aBrojevi[0];
var najveci = aBrojevi[0];

aBrojevi.forEach(function (broj)
{
    if(broj>najveci)
    {
        najveci=broj;
    }
    if(broj<najmanji)
    {
        najmanji = broj;
    }
})

console.log("Najveci broj je " + najveci + ", a najmanji " + najmanji);