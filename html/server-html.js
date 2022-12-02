const express = require('express');

const app = express();

//app.use(express.static('assets')); // Definimos carpetas archivos estaticos 
                                   // Middleware
                                   // Localhost:3000/style.css

app.use('/assets', express.static('assets')); // Localhost:3000/assets/style.css

//app.use('/public', express.static('assets')); // Localhost:3000/assets/style.css

app.get('/', function(req, res){
    res.sendFile('index.html', {
        root: __dirname
    })
    //res.send(__dirname);
})
console.log("Live server!");
app.listen(3000);