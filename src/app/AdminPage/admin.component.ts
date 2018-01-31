import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {WorkerService} from '../service/worker.service';
import {Worker} from '../models/worker.model';
import {Duty} from '../models/duty.model';
import {DutyService} from '../service/duty.service';


@Component({
  // moduleId: module.id.toString(),
  selector: 'app-system',
  templateUrl: './admin.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      margin-top: 75px;
      background-color: #292b2c;
      color: white;
    }

    .dark-modal .close {
      color: white;
    }
  `]
})


export class AdminComponent implements OnInit {
  private workerService: WorkerService;
  private dutyService: DutyService;
  private worker: Worker;
  private duty: Duty;

  constructor(private modalService: NgbModal, workerService: WorkerService, dutyService: DutyService) {
    this.workerService = workerService;
    this.dutyService = dutyService;
    this.duty = new Duty();
    this.worker = new Worker();
    this.worker.email = 'NaN';
  }

  ngOnInit() {
    this.getByCurrentDuty();

  }

  getByCurrentDuty() {
      this.workerService.getByCurrentDuty().subscribe((worker) => {
        if (worker.hasOwnProperty('email')) {
          this.worker.email = worker.email;
          this.worker.name = worker.name;
          this.worker.id = worker.id;
          this.getDutyByWorkerId();
        }
      });
      }
   getDutyByWorkerId() {
    this.dutyService.getReadyByWorkerId(this.worker.id).subscribe((duty) => {
      this.duty.startDate = duty.startDate;
      this.duty.overDate = duty.overDate;
    });
  }

  open(content) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }
}
