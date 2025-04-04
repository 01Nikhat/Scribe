import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MyblogComponent } from './myblog/myblog.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


let firebaseConfig = {
  apiKey: "AIzaSyBb9krYE1zDJkCao0l7LTWv8Pkd-9_IbOo",
  authDomain: "sciber-d3424.firebaseapp.com",
  databaseURL: "https://sciber-d3424.firebaseio.com",
  projectId: "sciber-d3424",
  storageBucket: "sciber-d3424.appspot.com",
  messagingSenderId: "505180262277",
  appId: "1:505180262277:web:7976ce78988d2648fdbeec",
  measurementId: "G-GK68LGL6X1"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    Login1Component,
    MenuComponent,
    HomeComponent,
    MyblogComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
   
   
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
