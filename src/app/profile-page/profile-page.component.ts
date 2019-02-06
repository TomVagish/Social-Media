import {Component, OnInit, Query} from '@angular/core';
import * as firebase from 'firebase';
import {ServesService} from '../server.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {defineBase, query} from '@angular/core/src/render3';
import {User} from '../User.model';
import * as _ from "lodash";

@Component({selector: 'app-profile-page', templateUrl: './profile-page.component.html', styleUrls: ['./profile-page.component.css']})
export class ProfilePageComponent implements OnInit {
    date = new Date();
    userPostArray : any;
    name:string;
    img:string;

    // filter vars
    filteredUserPostArray:any;

    constructor(private db : AngularFireDatabase) {
        this.date = new Date();
    }

    filters = {};

    private applyFilters() {
        this.filteredUserPostArray = _.filter(this.userPostArray, _.conforms(this.filters) )
       // console.log(this.userPostArray);
      }

      filterExact(property: string, rule: any) {
        this.filters[property] = val => val == rule
        this.applyFilters()
      }

  
    ngOnInit() {

        let CurrentUid = localStorage.getItem('CurrentUserUid');

        this.db.list(`/Users/${CurrentUid}`).valueChanges().subscribe(item =>{
            //the Current user name
             this.name = item[0] +" "+ item[2];
            this.img = item[1]+"";
        })

        //////////////////////////

    

        this.db.list('/Posts')
        .valueChanges()
        .subscribe(posts => {
        this.userPostArray = posts;
        this.applyFilters();
      })

      const y = this.db.list('/Posts', ref => ref.orderByChild('Uid').equalTo(CurrentUid));
        console.log(y);
      
        // const databaseRef = firebase.database().ref().child('Users');
        // const queriedDbRef = this.db.list('/Users');
        // const x = queriedDbRef
        // .where({
        //   name: 'David',
        //   age: 27
        // });
        


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
