import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {WorkerService} from '../service/worker.service';
import {Worker} from '../models/worker.model';
import {Duty} from '../models/duty.model';
import {DutyService} from '../service/duty.service';
import {Router} from "@angular/router";


@Component({
  // moduleId: module.id.toString(),
  selector: 'app-system',
  templateUrl: './page.component.html',
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


export class PageComponent implements OnInit {
  private workerService: WorkerService;
  private dutyService: DutyService;
  private worker: Worker;
  private duty: Duty;

  constructor(private modalService: NgbModal, workerService: WorkerService, dutyService: DutyService, private router: Router) {
    this.workerService = workerService;
    this.dutyService = dutyService;
  }

  ngOnInit() {
    this.getByCurrentDuty();

  }

  getByCurrentDuty() {
    this.workerService.getByCurrentDuty().subscribe((worker) => {
      if (worker.hasOwnProperty('email')) {
        this.worker = worker;
        this.getDutyByWorkerId();
      }
    });
  }

  getDutyByWorkerId() {
    this.dutyService.getReadyByWorkerId(this.worker.id).subscribe((duty) => {
      this.duty = duty;
    });
  }

  logout(){
    localStorage.removeItem('x-access-token');
    this.router.navigate(['/login']);
  }

  open(content) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }
}
