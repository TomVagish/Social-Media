import {Component, OnInit} from '@angular/core';
import {ServesService} from './server.service';


@Component({selector: 'app-root',
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [ServesService]})

export class AppComponent implements OnInit {
    title = 'SocialMediaProject';

    constructor() {}

    ngOnInit() {


    }

}
