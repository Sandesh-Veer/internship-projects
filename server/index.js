const express=require('express');
const databaseConnection = require('./database');
const router = require('./route/bookRoute');
const app=express();
databaseConnection();

app.use(express.json())
app.use(express.json());

// JSON चा एरर पकडण्यासाठी हा नवीन कोड टाका
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.log("JSON फॉरमॅट चुकले आहे! मेसेज:", err.message);
        return res.status(400).json({ 
            error: "Postman मधील JSON डेटा चुकीचा आहे", 
            details: err.message 
        });
    }
    next();
});

app.use("/book", router);
app.use("/book",router)

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});

