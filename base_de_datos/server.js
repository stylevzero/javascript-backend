const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

let db = new sqlite3.Database('proyecto-backend');;

// Creamos la base de datos
//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

app.post('/pendientes', function(req, res) {
    db.run("INSERT INTO tasks(descripcion) VALUES('Hello World')");
    res.send('Inserción finalizada');
});

app.listen(3000);

// Evento -> Tecla Ctrl + C
process.on('SIGINT', function(){
    console.log('Cerramos la conexion con el servidor');
    db.close();
    process.exit();
})
