const express = require('express');
const app = express();



app.post('/api/user',(req,res,next)=>{
console.log(req.body);
});



app.get('/api/posts',(req,res,next)=>{
  const posts = [
    {
      id:1,
      title:'first-server-side post',
      content:'comming from the server'
    },
    {
      id:2,
      title:'second-server-side post',
      content:'comming from the server'
    },
    {
      id:3,
      title:'third-server-side post',
      content:'comming from the server'
    },
    {
      id:4,
      title:'forth-server-side post',
      content:'comming from the server'
    }
  ];
 res.status(200).json(posts);
});





module.exports = app;
