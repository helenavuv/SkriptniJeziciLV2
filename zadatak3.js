for (i=1;i<=100;i++)
{
    if (i%7==0 && i%5==0)
    {
        console.log("Broj " + i + " je djeljiv i s 5 i sa 7" );
    }
    else if(i%5==0)
    {
        console.log("Broj " + i + " je djeljiv s 5" );
    }
    else if(i%7==0)
    {
        console.log("Broj " + i + " je djeljiv sa 7" );
    }
}