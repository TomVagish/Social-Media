import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {post} from '../post.model';
import {postService} from '../post-service.service';


@Component({selector: 'app-post', templateUrl: './post.component.html', styleUrls: ['./post.component.css'], providers: [postService]})
export class PostComponent implements OnInit {

    date = new Date();
    PostArray : post[];

    constructor(private postservice : postService) {
        //The current date! not the current time the user upload the post!
        this.date = new Date();

    }

    CommentArray : string[] = [];
    public NewComment : string;
    public ArrayCommentLength : number;

    @ViewChild('NewComment')NewCommentView : ElementRef;

    ngOnInit() {

        // first render of PostArray,take the array from service and inject it to
        // PostArray here!
        this.PostArray = this.postservice.getPost();

      

    }

    // When the user write a comment he can press "Enter" to send it.
    OnClickSendComment(event) {

        if (event.key === "Enter") {
            this
                .CommentArray
                .push(this.NewCommentView.nativeElement.value);
            this.NewCommentView.nativeElement.value = null;
        }

    }

}
