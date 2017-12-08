import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ITask, Task} from '../models/task.model';
import {HttpClient} from '@angular/common/http';



const APP_URL = 'http://localhost:8456';

@Injectable()
export class TaskService {
  private addTaskUrl: string = APP_URL + '/task/add';
  private getTaskUrl: string = APP_URL + '/task/get';
  private deleteTaskUrl: string = APP_URL + '/task/delete';
  private updateTaskUrl: string = APP_URL + '/task/update/';
  private getOneTaskUrl: string = APP_URL + '/task/get/';

  constructor (private http: HttpClient)  {}

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.addTaskUrl , task);
  }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.getTaskUrl);
  }
  getOneTask(id: number): Observable<Task> {
    return this.http.get<ITask>(this.getOneTaskUrl + String(id));
  }
  deleteTasks(id: number): Observable<Task> {
    return this.http.delete<Task>(this.deleteTaskUrl + "/" + id);
  }
  updateTask(task: Task ): Observable<Task> {
    return this.http.put<Task>(this.updateTaskUrl, task);
  }
}
