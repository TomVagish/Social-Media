const http = require('http');
const app = require('./backend/app');



const port =  3000; //create var with port.
app.set('port',port); // set the var 'port' in app.

const server = http.createServer(app); // create a server with the app var.

server.listen(port);// start listen!
