import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import { Headers } from '@angular/http';
import {AngularFireDatabase} from 'angularfire2/database';
import {User} from './User.model';
import * as firebase from 'firebase';
import {defineBase} from '@angular/core/src/render3';
import { Post } from './post.model';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable()

export class ServesService {
  private token: any;

    constructor(private http: Http , private db: AngularFireDatabase, private router: Router) {}



    // register request to server with user details!
    register(user: any) {
      return this.http.post('http://localhost:3000/users/register', user);
    }


    // login request to server with user details!
    login(user: any) {
      return this.http.post('http://localhost:3000/users/login', user)
     .subscribe(response => {
       // get the token from response after successful login!
      this.token = JSON.parse(response.text());
      this.router.navigate(['/homePage']);
     });

    }

     // function that return the token.
      getToken() {
        return this.token.token;
      }





    // post new post into Database!
    setNewPost(token: string, newpost: Post) {

      const  headers =  { 'authorization': token };

      const requestOptions = {
        headers: new Headers(headers)
      };
        return this
            .http
            .post(`http://localhost:3000/posts`, newpost, requestOptions);
    }

}
