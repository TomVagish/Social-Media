import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { postService } from './post-service.service';
import { HttpModule } from '@angular/http';
import { ServesService } from './server.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PostComponent } from './post/post.component';
import { AddpostComponent } from './post/addpost/addpost.component';
import { SideMessengerComponent } from './side-messenger/side-messenger.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideNavComponent,
    PostComponent,
    AddpostComponent,
    SideMessengerComponent,
  ],
  imports: [BrowserModule,HttpModule],
  providers: [postService,ServesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
