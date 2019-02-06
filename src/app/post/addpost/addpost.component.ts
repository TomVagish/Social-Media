import {Component} from '@angular/core';
import {post} from 'src/app/post.model';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ServesService } from 'src/app/server.service';

@Component({selector: 'app-addpost', templateUrl: './addpost.component.html', styleUrls: ['./addpost.component.css'], providers: []})
export class AddpostComponent {

    public NewPostContent : string;
    AddNewPost : post;

    constructor(private db:AngularFireDatabase,private ServerService:ServesService) {}

    // take control on content that user input for new Post!

    UploadNewPost() {

       

        let CurrentUid = localStorage.getItem('CurrentUserUid');

    this.db.list(`/Users/${CurrentUid}`).valueChanges().subscribe(item =>{
        
        
        //the Current user name
        let name = item[0] +" "+ item[2];
        let img = item[1]+"";
        //built-in img for now!
         this.AddNewPost = new post(CurrentUid,name,img,'https://www.israel21c.org/wp-content/uploads/2016/06/shutterstock_105989930-1000x657.jpg' ,this.NewPostContent,5); 
         this.ServerService.setNewPost(this.AddNewPost)
         .subscribe(
             (error) => console.log(error));
    })
    

     
         
        
        

    }

    //delete the Textarea in add post and clean it!
    DeletePostContent() {
        this.NewPostContent = null
    }

}
