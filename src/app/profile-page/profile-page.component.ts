import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {ServesService} from '../server.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {defineBase} from '@angular/core/src/render3';
import {User} from '../User.model';


@Component({selector: 'app-profile-page', templateUrl: './profile-page.component.html', styleUrls: ['./profile-page.component.css']})
export class ProfilePageComponent implements OnInit {
    date = new Date();
    userPostArray : any;
    name:string;
    img:string;

    constructor(private db : AngularFireDatabase) {
        this.date = new Date();
    }

    ngOnInit() {

        let CurrentUid = localStorage.getItem('CurrentUserUid');

        this.db.list(`/Users/${CurrentUid}`).valueChanges().subscribe(item =>{
        
            //the Current user name
             this.name = item[0] +" "+ item[2];
            this.img = item[1]+"";
        })
        
        


        // all post in profile page - not done,requierd sort/filter
        // this
        //     .db
        //     .list(`/Posts`)
        //     .valueChanges()
        //     .subscribe((response) => {
        //         console.log(response);
        //         this.userPostArray = response;

        //     })
    }

}
