let rohit ={
  T20:{
    matches:125,
    runs:8000,
    },
  ODI:{
    matches:150,
    runs:10000,
    },
  TEST:{
    matches:43,
    runs:5000,
    }
}

for(let key in rohit){
  for(let key2 in rohit[key]){
    console.log(`${key} ${key2}: ${rohit[key][key2]}`);
}  
}
