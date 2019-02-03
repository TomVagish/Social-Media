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
import { SideMessengerComponent } from './side-messenger/side-messenger.component'
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import {FormsModule} from '@angular/forms';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { Routes,RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { AngularFireAuthModule } from 'angularfire2/auth';


  
const appRoutes: Routes =[
{ path: '', component: HomepageComponent },
{ path: 'profilePage', component: ProfilePageComponent }

];




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideNavComponent,
    PostComponent,
    AddpostComponent,
    SideMessengerComponent,
    ProfilePageComponent,
    HomepageComponent,
  ],
  imports: [AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [postService,ServesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
