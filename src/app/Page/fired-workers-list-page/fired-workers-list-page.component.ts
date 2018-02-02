import {Component, OnInit} from '@angular/core';
import {WorkerService} from '../../service/worker.service';
import {Worker} from '../../models/worker.model';

@Component({
  selector: 'app-fired-workers-list-page',
  templateUrl: './fired-workers-list-page.component.html',
  styleUrls: ['./fired-workers-list-page.component.css']
})
export class FiredWorkersListPageComponent implements OnInit {
  workers: Worker[];

  constructor(private workerService: WorkerService) {
  }

  ngOnInit() {
    this.getWorkerList();
  }

  getWorkerList() {
    return this.workerService.getAllWithStatusFired()
      .subscribe(workers => this.workers = (workers as (Worker[])), error => console.log(error));
  }
}
