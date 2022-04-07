var suma = 0;
var counter = 0;
var i = 1;
while (counter<100)
{
    if (i%2!=0)
    {
        suma+=i;
        counter++;
    }
    i++;

}
console.log("Suma neparnih brojeva je: " + suma);
