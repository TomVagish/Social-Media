var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
// mongoose schena
const Post = require('../models/post')
const checkToken = require('../middleware/check-token');


// connecting to mongodb
mongoose.connect('mongodb+srv://Tom:yewMZEZVsb7tsAan@cluster0-09fhj.mongodb.net/SocialMedia?retryWrites=true')
.then(() =>{
  console.log('connect to mongoDb!')
}).catch((error)=>{
  console.log(error);
});

router.post('/',checkToken,(req,res,next)=>{

  const post = new Post({
    postHeader: req.body.postHeader,
    postContent: req.body.postContent,
    postDate: req.body.postDate
  });
  post.save().then(()=>{
    res.status(201).json({
      message: 'post created!'
    })
  }).catch((error)=>{
    res.status(error).json({
      message:error
    })
  });
});




module.exports = router;
