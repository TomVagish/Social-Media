import {Component} from '@angular/core';
import {Post} from 'src/app/post.model';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ServesService } from 'src/app/server.service';

@Component({selector: 'app-addpost',
 templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
   providers: []})
export class AddpostComponent {

    public NewPostContent: string;
    AddNewPost: Post;

    constructor(private db: AngularFireDatabase, private ServerService: ServesService) {}

    // take control on content that user input for new Post!

    UploadNewPost() {

      // take the current time that the post upload!
      const cDate = new Date();
      const CurrentDate = cDate.getDate() + '/' + (cDate.getMonth() + 1) + '/' + cDate.getFullYear();
      console.log(this.ServerService.getToken());
      // Create an Object of 'Post' and sending him to 'setNewPost'  function into 'ServerService' !
      this.AddNewPost = new Post(this.NewPostContent, 'Header!', CurrentDate);
      this.ServerService.setNewPost(this.AddNewPost)
      .subscribe(
          (error) => console.log(error));

    //     const CurrentUid = localStorage.getItem('CurrentUserUid');

    // this.db.list(`/Users/${CurrentUid}`).valueChanges().subscribe(item => {


    //     // the Current user name
    //     const name = item[0] + '' + item[2];
    //     const img = item[1] + '';
    //     // built-in img for now!
    //


    // });







    }

    // delete the Textarea in add post and clean it!
    DeletePostContent() {
        this.NewPostContent = null;
    }

}
