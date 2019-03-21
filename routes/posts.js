var express = require('express');
var router = express.Router();
// mongoose schena
const Post = require('../models/post')

// middleware function that checks token validation
const checkToken = require('../middleware/check-token');

router.post('/', checkToken, (req, res, next) => {

    const post = new Post({postHeader: req.body.postHeader, postContent: req.body.postContent, postDate: req.body.postDate});
    post
        .save()
        .then(() => {
            res
                .status(201)
                .json({message: 'post created!'})
        })
        .catch((error) => {
            res
                .status(error)
                .json({message: error})
        });
});

module.exports = router;
