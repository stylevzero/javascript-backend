const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//let db = new sqlite3.Database('proyecto-backend');;
const sequelize = new Sequelize('proyecto-backend', null, null, {
    dialect: 'sqlite', // Especificamos que nuestro motoro de DB es sqlite
    storage: './proyecto-backend'
});
/* 
new sequelize -> 1er argumento -> Base de datos
              -> 2do argumento -> Nombre de usuario
              -> 3er argumento -> Constraseña
              -> 4to argumento -> JSON de configuraciones
*/

// Creamos la base de datos
//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

app.use('view engine', 'pug');

app.post('/pendientes', function(req, res) {
    //db.run(`INSERT INTO tasks(description) VALUES('${req.body.description}')`);
    
    // Sanitizar valores enviados
    db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
    res.send('Inserción finalizada');
});

app.listen(3000);

// Evento -> Tecla Ctrl + C
process.on('SIGINT', function(){
    console.log('Cerramos la conexion con el servidor');
    db.close();
    process.exit();
})


/* 
Comando para generar el archivo Seeders con los métodos Up y down
sequelize seed:generate --name generate_tasks

Ejecutar el seeder
sequelize db:seed:all
*/
