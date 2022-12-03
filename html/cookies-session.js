const express = require('express');

const app = express();

// Motor de vistas EJS
// npm install ejs

app.set('view engine', 'ejs');

//app.use(express.static('assets')); // Definimos carpetas archivos estaticos 
                                   // Middleware
                                   // Localhost:3000/style.css

app.use('/assets', express.static('assets')); // Localhost:3000/assets/style.css

//app.use('/public', express.static('assets')); // Localhost:3000/assets/style.css

app.get('/', function(req, res){
    res.render('index'); // Llamamos a la vista index.ejs
    /*
    res.sendFile('index.html', {
        root: __dirname
    })
    //res.send(__dirname);
    */
})
console.log("Live server!");
app.listen(3000);