import {Component, OnInit} from '@angular/core';
import {ServesService} from './server.service';
import {Observable, from} from 'rxjs';
import * as firebase from 'firebase';


@Component({selector: 'app-root',
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [ServesService]})

export class AppComponent implements OnInit {
    title = 'SocialMediaProject';

    // var for show/hide login/register div(card)
    OpenLogin = false;
    OpenRegister = false;

    // var for login
    private register_email: string;
    private register_password: string;

    constructor(private Ss: ServesService) {}

    ngOnInit() {


    }

}
