import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import * as jwt from 'angular2-jwt';

@Injectable()
export class UserCanActivateImpl implements CanActivate {

  constructor(private router: Router){}

  canActivate(): boolean {
    let token: string = localStorage.getItem('x-access-token');
    if(token && jwt.tokenNotExpired(token))
      return true;
    this.router.navigate(['./login']);
    return false;
  }

}
