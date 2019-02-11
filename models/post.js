const mongoose = require('mongoose');

const postSchema  = mongoose.Schema({

  postHeader: { type: String, require: true },
   postContent: { type: String, require: true },
   postDate: { type: String , require: true}

});


module.exports =  mongoose.model('Post',postSchema);
