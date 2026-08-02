//hollow triangle
var i;
var j;
var k;
var ptr="";
for(i=1; i<=5; i++)
{
    for(j=4; j>=i; j--){
        ptr+=" "
    }
    for(k=1; k<=i; k++){
        if(i==1||i==5||k==1||k==i)
            ptr+="* "
        else
            ptr+=" "
    }
    ptr+="\n"   
}
console.log(ptr);