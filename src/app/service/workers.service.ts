import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {IWorker, Worker} from '../models/worker.model';
import {HttpClient} from '@angular/common/http';





const APP_URL = 'http://localhost:8456';
@Injectable()

export class  WorkersService {
private addWorkerUrl: string = APP_URL + '/workers/add';
private getWorkersUrl: string = APP_URL + '/workers/get';
private getOneWorkersUrl: string = APP_URL + '/workers/get/';
private deleteWorkersUrl: string = APP_URL + '/workers/delete';
private updateWorkersUrl: string = APP_URL + '/workers/update/';



  constructor (private http: HttpClient)  {}

  addWorker(worker: Worker): Observable<Worker> {

    return this.http.post<Worker>(this.addWorkerUrl, worker);
    }

   getWorkers(): Observable<Worker[]> {
      return this.http.get<Worker[]>(this.getWorkersUrl);
    }
    getOneWorker(id: number): Observable<Worker> {
    return this.http.get<IWorker>(this.getOneWorkersUrl + String(id));
   }
    deleteWorkers( id: number): Observable<Worker> {
      return this.http.delete<Worker>(this.deleteWorkersUrl + "/" + id);
    }
    updateWorker(worker: Worker ): Observable<Worker> {
    return this.http.put<Worker>( this.updateWorkersUrl , worker);
  }
   }

