import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {tokenNotExpired} from 'angular2-jwt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AdminCanActivateImpl implements CanActivate {

  constructor(private router: Router){}

  canActivate(): boolean {
    let token: string = localStorage.getItem('x-access-token');
    if (token && tokenNotExpired('x-access-token') && this.isAdmin(token)) {
      return true;
    } else {
      this.router.navigate(['./login']);
      return false;
    }
  }

  private isAdmin(token:string): boolean{
    let decoded = jwt.decode(token);
    let decToStr = JSON.stringify(decoded);
    let decToJSON = JSON.parse(decToStr);
    let tokenRole = decToJSON['role'];
    return tokenRole === 'admin';
  }

}
