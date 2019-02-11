

export class User {

    private FirstName: string;
    private UserPassword: string;
    private LastName: string;
    private ImgProfile: string;
    private UserEmail: string;
    private Numofpost: number;
    private Uid: string;

    // constructor(FirstName:string,LastName:string,ImgProfile:string,UserEmail:string,Numofpost:number,Uid:string){
    //     this.FirstName = FirstName;
    //     this.LastName = LastName;
    //     this.ImgProfile = ImgProfile;
    //     this.UserEmail = UserEmail;
    //     this.Numofpost = Numofpost;
    //     this.Uid = Uid;
    // }

    constructor(UserEmail: string, UserPassword: string) {

      this.UserEmail = UserEmail;
      this.UserPassword = UserPassword;

  }

}
