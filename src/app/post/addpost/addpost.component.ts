import {Component, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import {postService} from 'src/app/post-service.service';
import {post} from 'src/app/post.model';

@Component({selector: 'app-addpost', templateUrl: './addpost.component.html', styleUrls: ['./addpost.component.css'], providers: [postService]})
export class AddpostComponent {

    public NewPostContent : string;

    PostArray : post[];
    @Output()PostArrayChange = new EventEmitter < post > ();

    AddNewPost : post;
    NewContentPost : string;

    constructor(private PostService : postService) {}

    // take control on content that user input for new Post!
    @ViewChild('NewPostContent')NewPostContentRef : ElementRef;

    UploadNewPost() {

        // Trying to upload post and send it to serviePost and push it into PostArray
        //  *** not working yet! ***

        this.NewContentPost = this.NewPostContentRef.nativeElement.value;
        this.AddNewPost = new post("tom", "vagish", "hhh", "22", this.NewContentPost, 5, "1");
        this.PostArray.push(this.AddNewPost);
        this.PostArrayChange.emit(this.AddNewPost);

        // check console.log(this.PostArrayChange) console.log(this.PostArray)
        // console.log(this.AddNewPost) this.NewPostContentRef.nativeElement.value=null;

    }

    //delete the Textarea in add post and clean it!
    DeletePostContent() {
        this.NewPostContentRef.nativeElement.value = null;
    }

}
