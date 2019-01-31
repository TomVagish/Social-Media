import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AngularFireDatabase} from 'angularfire2/database'



@Injectable()

export class ServesService{
constructor(private http:Http,private db: AngularFireDatabase){


}



getPosts(){
return this.http.get('http://localhost:3000/Posts');
}

}