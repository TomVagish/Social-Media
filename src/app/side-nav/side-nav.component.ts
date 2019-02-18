import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {ServesService} from '../server.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {defineBase, query} from '@angular/core/src/render3';
import {User} from '../User.model';
import * as _ from "lodash";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private db:AngularFireDatabase) { }
  CurrentUserName:string;


  ngOnInit(){
    let CurrentUid = localStorage.getItem('CurrentUserUid');

    this.db.list(`/Users/${CurrentUid}`).valueChanges().subscribe(item =>{
        //the Current user name
         this.CurrentUserName = item[0] +" "+ item[2];
        
    })
  }
  


}
