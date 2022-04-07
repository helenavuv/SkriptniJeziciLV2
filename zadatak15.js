import dajSlucajanBroj from './slucajanBroj.js';

var broj1 = dajSlucajanBroj(10,100);
var broj2 = dajSlucajanBroj(10,100);
var broj3 = dajSlucajanBroj(10,100);
console.log('Brojevi su: '+ broj1 + ', ' + broj2 + ', ' + broj3);

var znamenka1 = broj1%10;
var znamenka2 = broj2%10;
var znamenka3 = broj3%10;

if (znamenka1==znamenka2 || znamenka1==znamenka3 || znamenka2==znamenka3)
{
    console.log("True");
}
else
{
    console.log("False");
}

