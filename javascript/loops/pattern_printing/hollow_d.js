//hollow diamond
var i;
var j;
var k;
var ptr="";

//1st half
for(i=1; i<=6; i++)
{
    for(j=5; j>=i; j--){
        ptr+=" "
    }
    for(k=1; k<=(i*2-1); k++){
        if(i==1||k==1||k==(i*2-1))
            ptr+="* "
        else
            ptr+=" "
    }
    ptr+="\n"   
}

//2nd half
for(i=5; i>=1; i--)
{
    for(j=5; j>=i; j--){
        ptr+=" "
    }
    for(k=1; k<=(i*2-1); k++){
        if(i==1||i==6||k==1||k==(i*2-1))
            ptr+="* "
        else
            ptr+=" "
    }
    ptr+="\n"   
}
console.log(ptr);
