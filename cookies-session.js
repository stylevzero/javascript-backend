// npm install express
// npm i cookie-session

const express = require('express');

const cookiesSession = require('cookie-session');

const app = express();

app.use(cookiesSession({
    name: 'session',
    keys:['ejemplo','prueba']
}));

app.get('/', function(req, res){
    req.session.visits = req.session.visits || 0;

    req.session.visits = req.session.visits + 1;    
    
    res.send(`${req.session.visits} visita(s)`)
})

app.listen(3000);

// Pasar parametro mediante GET
// http://localhost:3000/welcome?name=javascript