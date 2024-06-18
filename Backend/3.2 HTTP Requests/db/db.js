
const mongoose = require("mongoose");


let url = "mongodb://localhost:27017/user"

mongoose.connect(url);

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("Database connection Succesfull")
})

db.on("error",()=>{
    console.log("Databse error had occurred")
})

db.on("disconneted",()=>{
    console.log("Database has been disconnectd")
})
module.exports = db