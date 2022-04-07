import dajSlucajanBroj from './slucajanBroj.js';

var broj = dajSlucajanBroj(10,9999);
console.log("Slucajan broj je: " + broj);

if (broj>99)
{
    console.log("Broj je veći od 99");
}
else{
    console.log("Broj je manji od 99");
}

var tekst=broj.toString();

console.log("Prva znamenka broja je " + tekst[0] + ", a zadnja je " + tekst[tekst.length-1]);