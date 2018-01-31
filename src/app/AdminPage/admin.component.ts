import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {WorkerService} from '../service/worker.service';
import {Worker} from '../models/worker.model';
import {current} from 'codelyzer/util/syntaxKind';


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
  private worker: Worker;
  public current: string;

  constructor(private modalService: NgbModal, workerService: WorkerService) {
    this.workerService = workerService;
    this.worker = new Worker();
    this.current = 'NaN';
  }

  ngOnInit() {
    this.getByCurrentDuty();
  }

  getByCurrentDuty() {
      this.workerService.getByCurrentDuty().subscribe((worker) => {
        if (worker.hasOwnProperty('email')) {
          this.current = worker.email;
        }
      });
  }

  open(content) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }
}
