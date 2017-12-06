import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../service/workers.service';
import { Worker} from '../../models/worker.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-worker-list-page',
  templateUrl: './worker-list-page.component.html',
  styleUrls: ['./worker-list-page.component.css']
})
export class WorkerListPageComponent implements OnInit {


  workers: Worker[];

  constructor( private workerService: WorkersService,
               private router: Router) {}

  ngOnInit() {
    this.getWorkerList();
  }

  getWorkerList(): void {
   this.workerService.getWorkers()
     .subscribe(workers => this.workers = (workers as (Worker[])), error => console.log(error), () => {}
     );
  }
  deleteWorker(id: number): void {
    this.workerService.deleteWorkers(id)
      .subscribe(()=>
        this.getWorkerList();)
  }
}
