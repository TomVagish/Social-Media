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
    public registerEmailAuth : string;
    public registerPasswordAuth : string;

    wellcomeUser = true;
    @ViewChild('#register-password')NewUserName : ElementRef;
    @ViewChild('#register-email')NewEmail : ElementRef;

    
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

    WellcomeNewUser() {
        alert()
        this.OpenRegister = false;
    }

    WellcomeUser() {
        this.OpenLogin = false;
        firebase.auth().createUserWithEmailAndPassword("tomvagish4@gmail.com","12348759")
        .catch(error => console.log(error));
 
    }
}
