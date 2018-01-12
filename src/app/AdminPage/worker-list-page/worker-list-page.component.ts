import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../service/worker.service';
import { Worker} from '../../models/worker.model';
import {DutyService} from '../../service/duty.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {Duty} from "../../models/duty.model";

@Component({
  selector: 'app-worker-list-page',
  templateUrl: './worker-list-page.component.html',
  styleUrls: ['./worker-list-page.component.css']
})
export class WorkerListPageComponent implements OnInit {
  id1: number;
  id2: number;
  workers: Worker[];
  public duty :Duty;
  id: number;

  constructor(
    private workerService: WorkerService,
    private dutyService: DutyService,
    private router: Router,
    private route:ActivatedRoute,
  ) {
    this.duty = new Duty();
  }

  ngOnInit() {
    this.getWorkerList();

  }
  getWorkerList(){
   return this.workerService.getAllOrderedByDutyWithStatusReady()
     .subscribe(workers => this.workers = (workers as (Worker[])), error => console.log(error));
  }
  getReadyByWorkerId(workerId:number){
      return this.dutyService.getReadyByWorkerId(workerId)
        .subscribe(result => console.log(result));
  }
  deleteWorker(id: number): void {
    this.workerService.deleteWorkers(id)
      .subscribe(() =>
        this.getWorkerList());
  }
  public setId(id: number):void {
    if(this.id1 === null || typeof this.id1 === 'undefined') {
      this.id1 = id;
    }
    else
      if(this.id2 === null || typeof this.id2 === 'undefined') {
        this.id2 = id;
        this.swap();
      }
  }
  public swap() {
    this.dutyService.swap(this.id1, this.id2)
      .subscribe(() => {
        this.id1 = null;
        this.id2 = null;
        this.getWorkerList();
        }, error => console.log(error));
  }
}
