const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const checkToken = require('../middleware/check-token');
// Vars for routing in server
const usersRouter = require('../routes/users');
const postsRouter = require('../routes/posts');
// framework to mongoDB
const mongoose = require('mongoose');

// use the express framework in this app
const app = express();

// use cors() method for cross origin resource sharing problem!
app.use(cors());
// use bodyparser to extract the content!
app.use(bodyparser.json());

// all request to server with will go to this Router!
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// connecting to mongodb
mongoose
    .connect('mongodb+srv://Tom:yewMZEZVsb7tsAan@cluster0-09fhj.mongodb.net/SocialMedia?retryW' +
        'rites=true')
    .then(() => {
        console.log('connect to mongoDb!')
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = app;
