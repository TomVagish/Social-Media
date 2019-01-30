import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ServesService{
constructor(private http:Http){}

getserver(){
return this.http.get('http://localhost:3000/Posts');
}

}