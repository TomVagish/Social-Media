import {Component, OnInit} from '@angular/core';
import {postService} from '../post-service.service';
import {post} from '../post.model';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({selector: 'app-side-messenger', templateUrl: './side-messenger.component.html', styleUrls: ['./side-messenger.component.css'], providers: [postService]})
export class SideMessengerComponent implements OnInit {

    constructor(private postservice : postService,private db:AngularFireDatabase) {}

    OnlineArray : any[];

    ngOnInit() {
        // show the all users UserName in Array, and show them in side messenger.
        // the final result is to show only the Online Users.
        //this.OnlineArray = this.postservice.getPost();

        this.db.list('/Users/')
        .valueChanges()
        .subscribe(
            (response) =>{
                this.OnlineArray = response;
            }
            
            // console.log(res)//should give you the array of percentage. 
        )

    }

}
