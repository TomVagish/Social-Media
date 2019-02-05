import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AngularFireDatabase} from 'angularfire2/database'
import { User } from './User.model';
import * as firebase from 'firebase';
import { defineBase } from '@angular/core/src/render3';



@Injectable()

export class ServesService{
constructor(private http:Http
   ,private db: AngularFireDatabase){
   

}

// post new User into Firebase/Users
setNewUser(user:User,Uid:string){
   return this.http.patch(`https://social-media-39aaa.firebaseio.com/Users/${Uid}/.json`,user);
}


// Get the post from Firebase/Database
getPosts(){
return this.http.get('http://localhost:3000/Posts');
}



}

