const asyncHandler = require("express-async-handler");
const Contact = require("../models/userModel");

//@desc Register a user
//@route POST/api/users/register
//@access public

const registerUser = asyncHandler(async (req,res)=>{
    const {name, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All Fields are mandatory!")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("email already exist!")
    }
    
    res.json({message : "Register the user"})
})
//@desc login user
//@route POST/api/users/login
//@access public
const loginUser = asyncHandler(async (req,res)=>{
    res.json({message : "User Login"})
})

//@desc Current User Info
//@route POST/api/users/current
//@access private

const currentUser = asyncHandler(async (req,res)=>{
    res.json({message : "Current User Info"})
})

module.exports = {registerUser,loginUser, currentUser}


