const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.urlencoded({extended: true}) );

app.post('/',function (req, res){
    //req.body.name
    console.log(req);
    res.send(`Hello ${req.body.name}`);
})

app.listen(3000);


// npm install body-parser

// Postman
// http://localhost:3000/welcome?name=javascript