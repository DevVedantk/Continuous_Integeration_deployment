import express from 'express';

const app=express();


app.get("/",(req,res)=>{
    res.send("Hello World");
})

 
app.get("/logout",(req,res)=>{
    res.send("logout")
})


app.get("/even",(req,res)=>{
    res.send("good evening...")
})

app.get("/test",(req,res)=>{
    res.send("testing.... Again!!!");
})

app.listen(3000,()=>{
    console.log("server started");
})