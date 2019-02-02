import {Component, HostListener, ElementRef, ViewChild} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@Component({selector: 'app-nav', templateUrl: './nav.component.html', styleUrls: ['./nav.component.css']})
export class NavComponent {

    constructor(private eRef : ElementRef,private firebase:AngularFireDatabase) {}
    

    // var for show/hide login/register div(card)
    OpenLogin = false;
    OpenRegister = false;

    // var for login
   private register_email:string;
   private register_password:string;

    wellcomeUser = true;
    @ViewChild('#register-password')registerPassword : ElementRef;
    @ViewChild('#register-email')registerEmail : ElementRef;

    
    // var for register click on anything outside the card login/register will close
    // the card
    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.OpenLogin = false;
            this.OpenRegister = false;
        }

    }

    

    // function that change between login/register card
    Toggle_Login_Register(flag : number)
    {
        if (flag == 1) {
            this.OpenLogin = !this.OpenLogin;
            this.OpenRegister = false;
        } else if (flag == 2) {
            this.OpenLogin = false;
            this.OpenRegister = !this.OpenRegister;
        }

    }

    registerUser() {
        firebase.auth().createUserWithEmailAndPassword(this.register_email,this.register_password)
        .catch(error => console.log(error));
      
        //this.OpenRegister = false;
    }

    loginUser() {
        this.OpenLogin = false;
       
 
    }
}
