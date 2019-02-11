import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import { Http } from '@angular/http';
import { ServesService } from 'src/app/server.service';

@Component({selector: 'app-login',
 templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {


    constructor(private router: Router, private Serverservice: ServesService) {}


    ngOnInit() {}

    onLogin(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;

          const user = {
            userEmail: email,
            userPassword: password
          };

          this.Serverservice.login(user).subscribe();


        // firebase
        //     .auth()
        //     .signInWithEmailAndPassword(email, password)
        //     .then(response => {
        //         localStorage.setItem('CurrentUserUid', response.user.uid);
        //         this
        //             .router
        //             .navigate(['/homePage']);

        //     })
        //     .catch(function (error) {
        //       console.log(error);
        //     });

    }
}
