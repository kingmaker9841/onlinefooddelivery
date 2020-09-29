const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


const PORT = proces.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})