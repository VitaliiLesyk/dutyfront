import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../service/worker.service';
import { Worker} from '../../models/worker.model';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-worker-list-page',
  templateUrl: './worker-page.component.html',
  styleUrls: ['./worker-page.component.css']
})
export class WorkerPageComponent implements OnInit {
  private workerService: WorkerService;
  private route: ActivatedRoute;
  private worker: Worker;

  constructor(
    workerService: WorkerService,
    route: ActivatedRoute
  ) {
    this.workerService = workerService;
    this.route = route;
    this.worker = new Worker();
  }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.workerService.getOneWorker(id)
      .subscribe(worker => {
        this.worker = (worker as (Worker));
      });
  }


}


