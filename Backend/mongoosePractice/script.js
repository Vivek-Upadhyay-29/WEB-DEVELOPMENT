const mongoose = require("mongoose")
const user = require("./UserInfo");
const { userInfo } = require("os");
const { run } = require("node:test");

run()
async function run(){
    const User = new User({name:"vivek", age: 26})
    await user.save()
console.log(user)}


User.save().then(()=>{
    console.log("User Saved")
})

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