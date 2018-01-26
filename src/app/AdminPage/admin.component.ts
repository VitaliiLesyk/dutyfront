import {Component, ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
 // moduleId: module.id.toString(),
  selector: 'app-system',
  templateUrl : './admin.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]
})


export class AdminComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
