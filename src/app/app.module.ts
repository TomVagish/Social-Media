import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { postService } from './post-service.service';
import { HttpModule } from '@angular/http';
import { ServesService } from './server.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import {FormsModule} from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';


//Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PostComponent } from './post/post.component';
import { AddpostComponent } from './post/addpost/addpost.component';
import { SideMessengerComponent } from './side-messenger/side-messenger.component'
import { HomepageComponent } from './homepage/homepage.component'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';


  
const appRoutes: Routes =[
{ path: '', component: RegisterComponent },
{ path: 'homePage', component: HomepageComponent },
{ path: 'profilePage', component: ProfilePageComponent },
{ path: 'LoginPage', component: LoginComponent },
 { path: 'RegisterPage', component: RegisterComponent }
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
    LoginComponent,
    RegisterComponent,
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
