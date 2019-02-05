import {Component} from '@angular/core';
import {post} from 'src/app/post.model';

@Component({selector: 'app-addpost', templateUrl: './addpost.component.html', styleUrls: ['./addpost.component.css'], providers: []})
export class AddpostComponent {

    public NewPostContent : string;
    AddNewPost : post;

    constructor() {}

    // take control on content that user input for new Post!

    UploadNewPost() {
        // this.NewContentPost = this.NewPostContentRef.nativeElement.value; Trying to
        // upload post and send it to serviePost and push it into PostArray  *** not
        // working yet! ***   this.AddNewPost = new post("tom", "vagish", "hhh", "22",
        // this.NewContentPost, 5, "1");  this.PostArray.push(this.AddNewPost);
        // this.PostArrayChange.emit(this.AddNewPost); check
        // console.log(this.PostArrayChange) console.log(this.PostArray)
        // console.log(this.AddNewPost) this.NewPostContentRef.nativeElement.value=null;

    }

    //delete the Textarea in add post and clean it!
    DeletePostContent() {}

}
