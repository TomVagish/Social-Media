import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {post} from '../post.model';
import {ServesService} from '../server.service';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({selector: 'app-post',
 templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
   providers: []})

export class PostComponent implements OnInit {

    date = new Date();
    PostArray : any;

    constructor(private Serverservice : ServesService, private db : AngularFireDatabase) {
        //The current date! not the current time the user upload the post!
        this.date = new Date();

    }

    CommentArray : string[] = [];
    public NewComment : string;
    public ArrayCommentLength : number;

    @ViewChild('NewComment')NewCommentView : ElementRef;

    ngOnInit() {

        // Get the 'Posts from Database
        this
            .db
            .list('/Posts')
            .valueChanges()
            .subscribe((response) => {
                this.PostArray = response;
            })
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
