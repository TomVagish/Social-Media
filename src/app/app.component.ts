import {Component, OnInit} from '@angular/core';
import {postService} from './post-service.service';
import { ServesService } from './server.service';



@Component({selector: 'app-root',
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [postService,ServesService]})

export class AppComponent implements OnInit {
    title = 'SocialMediaProject';

    constructor() {}

    // vars that are responsible to Toggle Menu/AddPost/messenger - when the website is  fits to tablets.
    ShowMenu = false;
    ShowAddPost = false;
    showMessenger = false;

    
    ngOnInit()
    {
       

        
    }

    
    


    //Toggle function with 3 options!
    toggle_Addpost_Navbar_Messenger(flag : number)
    {
        if (flag == 1 && this.ShowMenu == this.ShowMenu) {
            this.ShowMenu = !this.ShowMenu;
            this.ShowAddPost = false;
            this.showMessenger = false;
        } else if (flag == 2 && this.ShowAddPost == this.ShowAddPost) {
            this.ShowMenu = false;
            this.ShowAddPost = !this.ShowAddPost;
            this.showMessenger = false;
        } else if (flag == 3 && this.showMessenger == this.showMessenger) {
            this.ShowMenu = false;
            this.ShowAddPost = false;
            this.showMessenger = !this.showMessenger;
        }
    }
}
