const express = require('express');
const path = require('path');

const port = 5000;

const app =  express()


// Use static files to make the accessible in the server
app.use(express.static('public'))

const myLogger = function(req, res, next) {
  console.log("Request IP: " + req.ip);
  console.log("Request Method: " + req.method);
  console.log("Request date: " + new Date());

  next(); // THIS IS IMPORTANT!
}

app.use(myLogger)


app.get('/', (req,res) =>{
    const filePath = path.join(__dirname, 'public', 'home.html');
    res.sendFile(filePath)
})

app.get('/contact', (req,res) =>{
    const filePath = path.join(__dirname, 'public', 'contact.html');
    res.sendFile(filePath)
})

app.get('/about', (req,res) =>{
    const filePath = path.join(__dirname, 'public', 'about.html');
    res.sendFile(filePath)
})

app.listen(port,() =>{
    console.log(`Server runnng at port ${port}!`)
})