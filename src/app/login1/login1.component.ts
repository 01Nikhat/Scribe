import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;
  constructor(public fb: FormBuilder , public authService:AuthService ,public router:Router) {
    this.myForm = this.fb.group({
      email: ['',[Validators.email, Validators.required]],
      password: ['',[Validators.required]]
    })
   }

  ngOnInit() {

  }
  onSubmit(form){
    firebase.auth().signInWithEmailAndPassword(form.value.email,form.value.password).then((data) =>{
      console.log(data);
      this.message = "you have been loggedin successfully. ";
      this.router.navigate(['/myblog']);
    }).catch((error) =>{
      console.log(error);
      this.userError = error;
    })
  }

}
