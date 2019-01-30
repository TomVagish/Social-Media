

export class User{

    private FirstName:string;
    private LastName:string;
    private ImgProfilehor:string;
    private UserEmail:string;
    private Numofpost:number;

    constructor(FirstName:string,LastName:string,ImgProfilehor:string,UserEmail:string,Numofpost:number){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.ImgProfilehor = ImgProfilehor;
        this.UserEmail = UserEmail;
        this.Numofpost = Numofpost;
    }

}