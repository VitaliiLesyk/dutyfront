import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class RedirectFromLogin implements CanActivate {

  constructor(private router: Router){}

  canActivate(): boolean {
    let token: string = localStorage.getItem('x-access-token');
    if (token && tokenNotExpired(null, token)) {
      this.router.navigate(['/page/workers-list']);
      return true;
    }
    return true;
  }

}
