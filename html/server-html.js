const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.sendFile('index.html', {
        root: __dirname
    })
    //res.send(__dirname);
})
console.log("Live server!");
app.listen(3000);