import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {Observable} from "rxjs/Observable";
import {AuthModel} from "../models/auth.model";

const APP_URL = 'http://localhost:8456';

@Injectable()
export class AuthService {
  private authenticationUrl: string;
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.authenticationUrl = APP_URL + '/authentication';
  }

  public authentication(user: UserModel): Observable<AuthModel> {
    return this.httpClient.post<AuthModel>(this.authenticationUrl, user);
  }

}
