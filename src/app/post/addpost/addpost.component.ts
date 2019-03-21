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

      const currentToken = this.ServerService.getToken();



      // Create an Object of 'Post' and sending him to 'setNewPost'  function into 'ServerService' !
      this.AddNewPost = new Post(this.NewPostContent, 'Header!', CurrentDate);
      this.ServerService.setNewPost(currentToken, this.AddNewPost)
      .subscribe((error)=> console.log(error));

          // clean the Textarea after post created!
          this.DeletePostContent();


    }

    // delete the Textarea in add post and clean it!
    DeletePostContent() {
        this.NewPostContent = null;
    }

}
