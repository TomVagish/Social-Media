var express = require('express');
const md5 = require('md5');
var router = express.Router();


router.post('/',(req,res,next)=>{
  const users = req.body;
  console.log(md5(users));
  res.send('post created!');
  });


  module.exports = router;
