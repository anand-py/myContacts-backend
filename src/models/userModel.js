const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username :{
        type : String,
        required : [true, "Please add the user name"]
    },
    email : {
        type : String,
        unique : [true, "Email already taken"],
        required : [true, "Please add the email address"]
    },
    password : {
        type : String,
        required : [true, "Please add the user password"]
    }
},
{
    timestamps : true,
});

module.exports = mongoose.model("User", userSchema)