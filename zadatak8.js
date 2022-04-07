import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi  =[];
for (var i=1;i<=50;i++)
{
    aBrojevi.push(dajSlucajanBroj(1,20));
}

var bezponavljanja = [];
aBrojevi.forEach(function (broj)
{
    if(bezponavljanja.indexOf(broj)==-1)
    {
        bezponavljanja.push(broj);
    }
    else
    {
        var index = bezponavljanja.indexOf(broj);
        if (index !== -1)
        {
            bezponavljanja.splice(index, 1);
        }
    }
});

console.log(bezponavljanja);