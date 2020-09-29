const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


//Establishing Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}, (err)=>{
    if (err) return "DB_ERROR";
    console.log("Mongoose connected...");
})

const PORT = proces.env.PORT || 5000;
//Listening on PORT
app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})