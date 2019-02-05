import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { User } from 'src/app/User.model';
import { ServesService } from 'src/app/server.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //Vars
  private newUser:User;

  constructor(private router: Router,private ServerService:ServesService) { }

  ngOnInit() {
  }

  onRegisterd(form :NgForm){
const email = form.value.email;
const password = form.value.password;
const firstname = form.value.Firstname;
const lastname = form.value.Lastname;
const userimg = form.value.userimg;


        // send email & password to firebase auth!
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(response =>{
              // Create a new user
            this.newUser  = new User(firstname,
            lastname,
            'http://www.mizrach.org.il/wp-content/uploads/2009/03/boy-512.png',
            email,
            10,
            response.user.uid);

        // Post the user into 'Users' in Firebase/database
         this.ServerService.setNewUser(this.newUser,response.user.uid).subscribe
            (
                (response) => console.log(name),
                (error) => console.log(error)
            );
  

        })
        .then(
          response =>{
             this.router.navigate(['/homePage']);
          }
         )
        .catch(error => console.log(error));

        

  }
}
