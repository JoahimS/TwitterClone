import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SamuraiGuard implements CanActivate {

  constructor() {}

  canActivate() {
    console.log('Samurai guard activated!');
    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      console.log('You do not have permission to view this page');
      return false;
    }
  }

}
