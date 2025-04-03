import express from 'express';

const app=express();


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/testing",(req,res)=>{
    res.send("testing route today")
})

app.get("/disk",(req,res)=>{
    res.send("dikshant");
})

app.get("/final",(req,res)=>{
    res.send("final testing...")
})


app.get("/ved",(req,res)=>{
    res.send("working vedant bro")
})

app.get("/users",(req,res)=>{
    res.send("this is backend user page")
})

app.get("/test",(req,res)=>{
 res.send("again")
})

app.get("/test2",(req,res)=>{
    res.send("again 2")
   })
app.get("/signIn",(req,res)=>{
  res.send("signIn page");
})

app.listen(3000,()=>{
    console.log("server started");
})