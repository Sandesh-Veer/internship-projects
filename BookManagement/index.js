const express=require('express');
const databaseConnection = require('./database')
const app=express()

databaseConnection();

app.get("/book",(req,res)=>{
    res.send ("bulding book manegment app");
})

app.listen(3000,()=> {
    console.log("server is listeing on port 3000");
    
})