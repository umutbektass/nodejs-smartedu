const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const courseRouter = require('./routes/courseRoute');
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.Db_URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{
    console.log("Db Connected Succesfully")
}).catch(err=>{
    console.log(err.message)
})

app.use("/course",courseRouter);

app.listen(PORT,()=>{
    console.log("Server is started.");
})
