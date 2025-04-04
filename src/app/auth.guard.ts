import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      return new Promise((resolve, reject) => {

        firebase.auth().onAuthStateChanged((user) => {
          //console.log(user)
          if(user) {
            resolve(true);
          } else {

            this.router.navigate(['/login']);

            resolve(false);
          }
        })

      })

  }
}

