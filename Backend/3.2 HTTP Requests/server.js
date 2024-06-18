const express = require("express");
const app = express()
const db=require("./db/db")

app.get("/",(req,res)=>{
    res.send("This is Home Page")
})