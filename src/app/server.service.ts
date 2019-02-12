import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AngularFireDatabase} from 'angularfire2/database';
import {User} from './User.model';
import * as firebase from 'firebase';
import {defineBase} from '@angular/core/src/render3';
import { Post } from './post.model';
import { Token } from '@angular/compiler';

@Injectable()

export class ServesService {
  private token: string;

    constructor(private http: Http, private db: AngularFireDatabase) {}



    register(user: any) {
      return this.http.post('http://localhost:3000/users/', user);
    }


    login(user: any) {
      return this.http.post('http://localhost:3000/users/login', user)
     .subscribe(response => {

      this.token = response + '';
      console.log(this.token);
     });
        // the return token from server after success logged-in!

    }


      getToken() {
        return this.token;
      }


    // post new User into Firebase/Users
    setNewUser(user: User, Uid: string) {
        return this
            .http
            .patch(`https://social-media-39aaa.firebaseio.com/Users/${Uid}/.json`, user);
    }






    // post new post into Firebase/database
    setNewPost(Poost: Post) {
        return this
            .http
            .post(`http://localhost:3000/posts`, Poost);
    }

}
