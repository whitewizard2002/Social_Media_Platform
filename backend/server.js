const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./middleware/logger');


app.use(logger);

app.get('/', (req, res) => {
    console.log("Get request for '/'");

    res.end("Hello, world!");
});

app.listen(5000, ()=>{
    console.log(`Server is listening on port: ${process.env.PORT_ADDRESS}`);
});