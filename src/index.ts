import express from 'express';

const app=express();


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/cicd",(req,res)=>{
   res.send("ci cd is working !!!")
})

app.get("/users",(req,res)=>{
    res.send("this is backend user page")
})

app.get("/signIn",(req,res)=>{
  res.send("signIn page");
})

app.listen(3000,()=>{
    console.log("server started");
})