import {Component, OnInit} from '@angular/core';
import {postService} from './post-service.service';
import { ServesService } from './server.service';

import { Observable } from 'rxjs';





@Component({selector: 'app-root',
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [postService,ServesService]})

export class AppComponent implements OnInit {
    title = 'SocialMediaProject';

    

    constructor() {
       
    
    }

    onsubmit() {
        
      }

    // vars that are responsible to Toggle Menu/AddPost/messenger - when the website is  fits to tablets.
  

    
    ngOnInit()
    {
       

        
    }

    
    



}
