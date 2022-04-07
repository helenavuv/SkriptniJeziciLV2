var Polje1 = [1, 4, 7, 8, 9, 12, 16, 18, 22, 24, 25];
var Polje2 = [2, 3, 4, 7, 8, 11, 13, 15, 17, 18, 22, 23];
var rjesenje = [];

Polje1.forEach(function (broj)
{
    if(Polje2.indexOf(broj)!=-1)
    {
        rjesenje.push(broj);
    }
})

console.log(rjesenje);