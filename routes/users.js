var express = require('express');
var router = express.Router();
const User = require('../models/user')
const md5 = require('md5');
const mongoose = require('mongoose');


// connecting to mongodb
mongoose.connect('mongodb+srv://Tom:yewMZEZVsb7tsAan@cluster0-09fhj.mongodb.net/angular?retryWrites=true')
.then(() =>{
  console.log('connect to mongoDb!')
}).catch((error)=>{
  console.log(error);
});



router.post('/',(req,res,next)=>{

    const user = new User({
      userEmail: req.body.userEmail,
      userPassword:md5(req.body.userPassword)
    });

    user.save().then(()=>{
      res.status(201);
    }).catch(err =>{
      res.status(500).json({
        error:err
      })
    })


});


// router.post('/',(req,res,next)=>{

//   User.findOne({userEmail: req.body.userEmail})
//   .then(user => {
//     if(!user){
//       return res.status(401).json({
//         message: 'Auth failed!'
//       });
//     }
//   });



  // const user = new User({
  //   userEmail: req.body.userEmail,
  //   userPassword: req.body.userPassword
  // });




  // });


  module.exports = router;
