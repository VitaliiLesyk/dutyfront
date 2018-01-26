import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Duty} from '../models/duty.model';
import {HttpClient} from '@angular/common/http';

const APP_URL = 'http://localhost:8456';

@Injectable()
export class DutyService {
  private getByWorkerUrl: string = APP_URL + '/duty/getReadyByWorkerId/';
  private swapWorkersUrl: string = APP_URL + '/duty/swap/';

  constructor (private http: HttpClient)  {}

  getReadyByWorkerId(id: number): Observable<Duty> {
    return this.http.get<Duty>(this.getByWorkerUrl + String(id));
  }
  swap(workerId1: number , workerId2: number): Observable<Duty[]> {
    return this.http.get<Duty[]>(this.swapWorkersUrl + String(workerId1) + '/and/' + String(workerId2));
  }


}

