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

      this.AddNewPost = new Post('Header!', this.NewPostContent);
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
