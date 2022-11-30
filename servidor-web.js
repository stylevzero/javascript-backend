const express = require('express');

const app = express();

app.get('/welcome', function(req, res){
    //res.send("El servidor se encuentra corriendo");
    res.send(`Hello ${req.query.name}`)
})

app.listen(3000);

// Pasar parametro mediante GET
// http://localhost:3000/welcome?name=javascript