const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb()
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(errorHandler);
app.use('/api/contacts', require("./routes/contactRoutes"));

app.listen(port,(err)=>{
    if(!port){
        console.log("Error encounter")
    }else{
        console.log(`connected on ${port}`)
    }
})