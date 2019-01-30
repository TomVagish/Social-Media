

export class post {
    
    private postUserName : string;
    private postUserNameImg : string;
    private postImg : string;
  //  private postHeader : string;
    private postContent : string;
    private postLike : number;
    private postComment : string;

    constructor(postUserName : string, postUserNameImg : string, postImg : string, postHeader : string, postContent : string, postLike : number, postComment : string)
    {
        this.postUserName = postUserName;
        this.postUserNameImg = postUserNameImg;
        this.postImg = postImg;
     //   this.postHeader = postHeader;
        this.postContent = postContent;
        this.postLike = postLike;
        this.postComment = this.postComment;
    }

}