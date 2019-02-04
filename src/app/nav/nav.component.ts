import {Component, HostListener, ElementRef} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { User } from '../User.model';
import { ServesService } from '../server.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';





@Component({selector: 'app-nav', templateUrl: './nav.component.html', styleUrls: ['./nav.component.css']})
export class NavComponent {
    userId: string;
    constructor(private afAuth: AngularFireAuthModule,
        private ServerService:ServesService,
        private eRef : ElementRef,
        private firebase:AngularFireDatabase,
         private router: Router) {
     
    }
    

    // var for show/hide login/register div(card)
    OpenLogin = false;
    OpenRegister = false;

    // var for Register
   private register_email:string;
   private register_password:string;
    private uid:string;
   // var for login
   private login_email:string;
   private login_password:string;
   private newUser:User;


    wellcomeUser = true;
 
    
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
            this.OpenRegister = false;
            this.OpenLogin = !this.OpenLogin;
        } else if (flag == 2) {
            this.OpenLogin = false;
            this.OpenRegister = !this.OpenRegister;
        }

    }


     // Create user by Email & password
    registerUser() {

        //close Register card
        this.OpenRegister = false;

        
        // send email & password to firebase auth!
        firebase.auth().createUserWithEmailAndPassword(this.register_email,this.register_password)
        .then(response =>{
              // Create a new user
            this.newUser  = new User("tom",
            "vagish",
            "http://www.mizrach.org.il/wp-content/uploads/2009/03/boy-512.png",
            this.register_email,
            10,
            response.user.uid);

        // Post the user into 'Users' in Firebase/database
         this.ServerService.setNewUser(this.newUser,response.user.uid).subscribe
            (
                (response) => console.log(response),
                (error) => console.log(error)
            );
                
        })
        .catch(error => console.log(error));

    }



   


    loginUser() {
        this.OpenLogin = false;

        firebase.auth().signInWithEmailAndPassword(this.login_email, this.login_password)
        .catch(function(error) {
         });

    
    }


    signout(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
        
    }


     checkauth(){
      
     firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(user.uid + " in nav");
                
            } else {
                console.log("null in nav");
                this.uid = user.uid;
            }
          });
     
        // var user = firebase.auth().currentUser;
        // if (user) {
        //   console.log(user.uid + " in nav");
        //           this.uid = user.uid;
        // } else {
        //   console.log("null in nav");
        //   // No user is signed in.
        // }
    }
}
