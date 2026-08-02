//star pattern for ltr P
var i;
var j;
var ptr="";

for(i=1; i<=7; i++)
{
    for(j=1; j<=5; j++)
    {
      if(j==1 || (i==1 && j<5) || 
        (i==4 && j<5) || 
        (j==5 && i>1 && i<4))
         {
            ptr+="* ";
         }
      else
            ptr+="  ";
    }
    ptr+="\n";
}

console.log(ptr);