import { Component, OnInit } from '@angular/core';
import * as firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: any = {};
  loggedIn: boolean = false;
  constructor() {
    /*this.user = firebase.auth().currentUser;
    if(this.user){
      this.loggedIn=true;
      //console.log("llllllllllllllllllllllllllllllllll");
      //console.log(typeof(this.user));
      this.id = this.user.uid;
      //console.log(this.id);
    }
    else{
      this.loggedIn = false;
    }*/
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
        this.user = firebase.auth().currentUser;
        console.log(this.user);
      } else {
        this.loggedIn = false;
      }
    });
  }

  ngOnInit() {
  }
  logout(){
    firebase.auth().signOut();
  }


  
}
