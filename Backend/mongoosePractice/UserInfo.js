const mongoose = require("mongoose");


let userSchema = new mongoose.Schema({

    name :{
        type : String,
    },

    age : {
        type :Number,
    },

    email :{
        type:String,
        required : true,
        unquie : true,
    }

})

mongoose.model("userDetail",userSchema); //model ek function hota hai jo do parameter leta hai collection name aur schema