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

    constructor(private db : AngularFireDatabase) {
        this.date = new Date();
    }

    ngOnInit() {

        // Get the current user Uid in localstore
        let CurrentUid = localStorage.getItem('CurrentUserUid');

        this
            .db
            .list(`/Posts`)
            .valueChanges()
            .subscribe((response) => {
                console.log(response);
                this.userPostArray = response;

            })
    }

}
