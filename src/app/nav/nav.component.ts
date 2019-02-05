import {Component, HostListener, ElementRef} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { User } from '../User.model';
import { ServesService } from '../server.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { defineBase } from '@angular/core/src/render3';





@Component({selector: 'app-nav', templateUrl: './nav.component.html', styleUrls: ['./nav.component.css']})
export class NavComponent {
    userId: string;
    constructor(private afAuth: AngularFireAuthModule,
        private ServerService:ServesService,
        private eRef : ElementRef,
        private firebase:AngularFireDatabase,
         private router: Router) {
    }

    HideLoginRegister = true;

    signout(){
        firebase.auth().signOut().then(
            response =>{
               this.router.navigate(['/LoginPage']);
               this.HideLoginRegister = false;
            }
           ).catch(function(error) {
            // An error happened.
          });
        
    }

}
