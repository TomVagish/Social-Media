var express = require('express');
var router = express.Router();
// mongoose schema
const User = require('../models/user');
const md5 = require('md5');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


// connecting to mongodb
mongoose.connect('mongodb+srv://Tom:yewMZEZVsb7tsAan@cluster0-09fhj.mongodb.net/angular?retryWrites=true')
.then(() =>{
  console.log('connect to mongoDb!')
}).catch((error)=>{
  console.log(error);
});



// register route
router.post('/',(req,res,next)=>{

    const user = new User({
      userEmail: req.body.userEmail,
      userPassword:md5(req.body.userPassword)
    });

    user.save().then(()=>{
      res.status(201).json({
        message: 'signup success ! '
      })
    }).catch(err =>{
      res.status(500).json({
        error:err
      });
    })


});

// login route
 router.post('/login',(req,res,next)=>{

  User.findOne({userEmail: req.body.userEmail})
  .then(user => {
    if(!user){
      return res.status(401).json({
        message: 'Auth failed, user not exist!'
      });
    }

    if(md5(req.body.userPassword) == user.userPassword ){
      // Create token when the user success to login!
        const token  =  jwt.sign({email: user.userEmail, userId: user._Id},'secret_t_v_angular',{expiresIn: '2h'});
      return res.status(200).json({
        token: token,
        message: 'login Success ! '
      });
    } else{
      return res.status(400).json({
        message: 'wrong password ! '
      })
    }

  });







  });


  module.exports = router;
