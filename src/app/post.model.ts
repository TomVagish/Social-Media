

export class post {
    
    private Uid : string;
    private postUserNameImg : string;
    private postUserName :string;
    private postImg : string;
    private postHeader : string;
    private postContent : string;
    private postLike : number;
    private postComment : string;

    constructor(Uid : string,postUserName:string, postUserNameImg:string, postImg:string, postContent:string, postLike:number)
    {
        this.Uid = Uid;
        this.postUserName = postUserName;
        this.postUserNameImg = postUserNameImg;
        this.postImg = postImg;
        
     //   this.postHeader = postHeader;
        this.postContent = postContent;
        this.postLike = postLike;
       // this.postComment = this.postComment;
    }

}