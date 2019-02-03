

export class User{

    private FirstName:string;
    private LastName:string;
    private ImgProfilehor:string;
    private UserEmail:string;
    private Numofpost:number;
    private Uid:string;

    constructor(FirstName:string,LastName:string,ImgProfilehor:string,UserEmail:string,Numofpost:number,Uid:string){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.ImgProfilehor = ImgProfilehor;
        this.UserEmail = UserEmail;
        this.Numofpost = Numofpost;
        this.Uid = Uid;
    }

}