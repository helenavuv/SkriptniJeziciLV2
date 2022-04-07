import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi  =[];
for (var i=1;i<=30;i++)
{
    aBrojevi.push(dajSlucajanBroj(10,200));
}

var n = aBrojevi.length;
for (var i = 1; i < n; i++) {
    var trenutni = aBrojevi[i];
    var j = i-1; 
    while ((j > -1) && (trenutni < aBrojevi[j])) {
        aBrojevi[j+1] = aBrojevi[j];
        j--;
    }
    aBrojevi[j+1] = trenutni;
}

console.log("Sortirani brojevi: " + aBrojevi);