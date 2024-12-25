const express = require('express');
const { rawListeners } = require("process");
require("dotenv").config();
const fs = require("fs");
const { json } = require("json");

const app = express();

//middleware
app.use(express.json());

//helper functions
const read = () =>{
    const data = fs.readFileSync("data.json");
}


app.get('/', (req, res) => { 
    res.status(201).send({msg:'Home Page'});
 });
 app.get('/contact', (req, res) => { 
    res.send('Contact Page');
 });
 app.get('/service', (req, res) => { 
    res.send('Service Page');
 });

 const port = process.env.PORT || 8000;
app.listen(port, ()=>{
      console.log(`Server is running on port ${port}`);
      
});

// app.post();
// app.put();
// app.delete();