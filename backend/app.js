const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const md5 = require('md5');
var usersRouter = require('../routes/users');
var postsRouter = require('../routes/posts');

const app = express();

// use cors() method for Cors problem!
app.use(cors());
// use bodyparser to extract the content!
app.use(bodyparser.json());

// all request to server with will go to this Router!
app.use('/users', usersRouter);
app.use('/posts', postsRouter);



module.exports = app;
