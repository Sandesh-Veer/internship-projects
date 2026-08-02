//reverse triangle
var i;
var j;
var k;
var ptr="";
for(i=1; i<=4; i++)
{
    for(j=2; j<=i; j++){
        ptr+=" "
    }
    for(k=4; k>=i; k--){
        ptr+="* "
    }
    ptr+="\n"   
}
console.log(ptr);
