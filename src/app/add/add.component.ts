import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
//import 'firebase/auth';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public authservice) { }

  ngOnInit() {
  }

}
