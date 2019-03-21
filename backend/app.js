const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const checkToken = require('../middleware/check-token');
// Vars for routing in server
const usersRouter = require('../routes/users');
const postsRouter = require('../routes/posts');
app.use("/",express.static(path.join(__dirname,"angular")));
// framework to mongoDB
const mongoose = require('mongoose');

const http = require('http');





// use the express framework in this app


// use cors() method for cross origin resource sharing problem!

// use bodyparser to extract the content!
app.use(bodyparser.json());

// all request to server with will go to this Router!
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use((req,res,next) =>{
  res.sendFile(path.join(__dirname,"angular","index.html"));
})

// connecting to mongodb
mongoose
    .connect('mongodb+srv://Tom:yewMZEZVsb7tsAan@cluster0-09fhj.mongodb.net/SocialMedia?retryW' +
        'rites=true',{ useNewUrlParser: true })
    .then(() => {
        console.log('connect to mongoDb!')
    })
    .catch((error) => {
        console.log(error);
    });


    const PORT = process.env.PORT || 3000; //create var with port.
app.set('port',PORT); // set the var 'port' in app.

const server = http.createServer(app); // create a server with the app var.

server.listen(PORT);

module.exports = app;
