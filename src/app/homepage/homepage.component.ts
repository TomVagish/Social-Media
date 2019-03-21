import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ShowMenu = false;
  ShowAddPost = false;
  showMessenger = false;

      // Toggle function with 3 options!
      toggle_Addpost_Navbar_Messenger(flag: number)
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



      signout() {

      }
}
