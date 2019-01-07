import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PostComponent } from './post/post.component';
import { AddpostComponent } from './post/addpost/addpost.component';
import { SideMessengerComponent } from './side-messenger/side-messenger.component';
import { postService } from './post-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideNavComponent,
    PostComponent,
    AddpostComponent,
    SideMessengerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [postService],
  bootstrap: [AppComponent]
})
export class AppModule { }
