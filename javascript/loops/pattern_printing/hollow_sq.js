//hollow square

var i;
var j;
var ptr="";
for(i=1; i<=5; i++)
{
    for(j=1; j<=5; j++){
        if(i==1||i==5||j==1||j==5)
            ptr+="*"
        else
            ptr+=" "
    }
    ptr+="\n"   
}
console.log(ptr);
