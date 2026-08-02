let obj={
    key1:"value1",
    key2:{
        key3:"value3",
        key4:"value4",
    }
}

let {key1,key2:{key3,key4}}=obj;

console.log(obj.key2.key4);

console.log(key4);