import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from "@angular/core";

@Injectable()
export class HttpClientWrapper extends HttpClient {
  private token: string;

  public post<T>(url: string, body: any | null): Observable<T> {
    this.setToken();
    return super.post<T>(url, body, {headers: {'x-access-token' : this.token}});
  }

  public get<T>(url: string): Observable<T> {
    this.setToken();
    return super.get<T>(url, {headers: {'x-access-token' : this.token}});
  }

  public put<T>(url: string, body: any | null): Observable<T> {
    this.setToken();
    return super.put<T>(url, body, {headers: {'x-access-token' : this.token}});
  }

  public delete<T>(url: string): Observable<T> {
    this.setToken();
    return super.delete<T>(url, {headers: {'x-access-token': this.token}});
  }

  private setToken() {
    this.token = localStorage.getItem('x-access-token');
  }

}
