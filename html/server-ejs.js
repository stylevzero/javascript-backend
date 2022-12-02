const express = require('express');

const app = express();

// Motor de vistas EJS
// npm install ejs

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets')); // Localhost:3000/assets/style.css

app.get('/', function(req, res){
    res.render('index'); // Llamamos a la vista index.ejs
})

console.log("Live server!");
app.listen(3000);