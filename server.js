const express =require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3030;
const app = express();
app.use(express.json());


app.get("/main",(req,res)=>{
    res.send("Welcome to Main page")
});
app.listen(PORT,()=>{
    console.log("http://localhost:3030/")
});