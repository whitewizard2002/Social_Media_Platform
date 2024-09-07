//imports
const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const cors = require('cors');

//middleware
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(logger);

//api routes

//login
app.post('/api/login', (req, res) => {
    res.end("Hello, world!");
});

//register
app.post('/api/register',(req,res)=>{
    const {firstname, lastname, email, username, password} = req.body;
    
    console.log("Data received from client:", firstname, lastname, email, username, password);
    res.status(200).json({
        success: 'true',
        data:'Hello Client!!!'
    });
});

//server listening
app.listen(process.env.PORT_ADDRESS, ()=>{
    console.log(`Server is listening on port: ${process.env.PORT_ADDRESS}`);
});