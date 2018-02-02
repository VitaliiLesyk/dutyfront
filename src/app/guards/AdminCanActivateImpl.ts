import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {AdminChecker} from "./AdminChecker";

@Injectable()
export class AdminCanActivateImpl implements CanActivate {

  constructor(private router: Router){}

  canActivate(): boolean {
    let token : string = localStorage.getItem('x-access-token');
    if (token && tokenNotExpired(null, token) && AdminChecker.isAdmin(token)) {
      return true;
    } else {
      if (token && tokenNotExpired(null, token) && !AdminChecker.isAdmin(token)){
        this.router.navigate(['/page/workers-list']);
        return false;
      } else {
        this.router.navigate(['./login']);
        return false;
      }
    }
  }

}
