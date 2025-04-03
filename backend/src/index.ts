import express from 'express';

const app=express();


app.get("/",(req,res)=>{
    res.send("Hello World");
})

 
app.get("/logout",(req,res)=>{
    res.send("logout")
})

app.get("/vedant",(req,res)=>{
 res.send("Vedant ho raha hain bhai!!!")
})



app.listen(3000,()=>{
    console.log("server started");
})