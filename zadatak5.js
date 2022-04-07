aPolje=[];
i=6;
while(aPolje.length < 50)
{
    i++;
    if (i%7==0)
    {
        aPolje.push(i);
    }

}
aParniBrojevi = [];
aPolje.forEach(a => {
    if(a%2==0)
    {
        aParniBrojevi.push(a)
    }
    
});
console.log(aParniBrojevi);