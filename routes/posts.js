var express = require('express');
var router = express.Router();

// mongoose schena
const Post = require('../models/post')



router.post('/',(req,res,next)=>{

  const post = new Post({
    postHeader: req.body.postHeader,
    postContent: req.body.postContent,
  });

  console.log(post);
});




module.exports = router;
