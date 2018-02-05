import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Duty} from '../models/duty.model';
import {HttpClientWrapper} from "../auth/wrapper/HttpClientWrapper";

const APP_URL = 'http://localhost:8456';

@Injectable()
export class DutyService {
  private getPassedByWorkerIdUrl: string = APP_URL + '/duty/getPassedByWorkerId/';
  private getReadyByWorkerIdUrl: string = APP_URL + '/duty/getReadyByWorkerId/';
  private swapWorkersUrl: string = APP_URL + '/duty/swap/';

  constructor (private http: HttpClientWrapper)  {}

  getReadyByWorkerId(id: number): Observable<Duty> {
    return this.http.get<Duty>(this.getReadyByWorkerIdUrl + String(id));
  }
  swap(workerId1: number , workerId2: number): Observable<Duty[]> {
    return this.http.get<Duty[]>(this.swapWorkersUrl + String(workerId1) + '/and/' + String(workerId2));
  }

  getPassedByWorkerId(id: number): Observable<Duty[]> {
    return this.http.get<Duty[]>(this.getPassedByWorkerIdUrl + String(id));
  }


}

