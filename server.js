const http = require('http');

function responseRequest(request, response){
    response.end('Hello World Javascript');
}

let server = http.createServer(responseRequest);

console.log("Server live in port: 3000");

// Levantamos el server
server.listen(3000);

// node server.js

// npm install express