import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AngularFireDatabase} from 'angularfire2/database'
import { User } from './User.model';



@Injectable()

export class ServesService{
constructor(private http:Http,private db: AngularFireDatabase){


}

setNewUser(user:User){
   return this.http.post('https://social-media-39aaa.firebaseio.com/Users.json',user);
}



getPosts(){
return this.http.get('http://localhost:3000/Posts');
}

}