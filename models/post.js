const mongoose = require('mongoose');

const postSchema  = mongoose.Schema({


  //  Uid: { type:String , require: true},
  //  postUserNameImg: { type: String , require: true},
  //  postUserName: { type: String, require: true },
  postHeader: { type: String, require: true },
   postContent: { type: String, require: true },
 // postImg: { type: String},
  //  postLike: number;
  //  postComment: string;
});


module.exports =  mongoose.model('Post',postSchema);
