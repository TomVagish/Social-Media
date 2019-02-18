var express = require('express');
var router = express.Router();
// mongoose schema
const User = require('../models/user');
// md5 create hash to userpassword
const md5 = require('md5');
// framework to mongoDB
const mongoose = require('mongoose');
// create json web token to logged-in users
const jwt = require('jsonwebtoken');
// sreate session to logged-in users
var session = require('express-session');


const Usertoken = '';
// session Configuration
router.use(session({
  name:Usertoken,
  resave:false,
  saveUninitialized:false,
  secret:'thisistomsecret!string',
cookie:{
  maxAge: 3600000,
  sameSite: true,
}
}));


// connecting to mongodb
mongoose.connect('mongodb+srv://Tom:yewMZEZVsb7tsAan@cluster0-09fhj.mongodb.net/SocialMedia?retryWrites=true')
.then(() =>{
  console.log('connect to mongoDb!')
}).catch((error)=>{
  console.log(error);
});


// router.use((req,res,next)=>{
//   const {userId} = req.session;
//   if(userId){
//     res.locals.user =
//   }
// })



// register route
router.post('/register',(req,res,next)=>{

    const user = new User({
      userEmail: req.body.userEmail,
      userPassword:md5(req.body.userPassword)
    });

    user.save().then(()=>{
      res.status(200).json({
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
        const token = jwt.sign({email: user.userEmail, userId: user._Id},'secret_t_v_angular',{expiresIn: '2h'});
        req.session.userId = token;
        console.log(req.session);
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
