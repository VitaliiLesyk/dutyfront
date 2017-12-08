import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../service/worker.service';
import { Worker } from '../../models/worker.model';
import {Message} from '../../models/message.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-worker-page',
  templateUrl: './add-worker-page.component.html',
  styleUrls: ['./add-worker-page.component.css']
})
export class AddWorkerPageComponent implements OnInit {
  private workerService: WorkerService;
  private worker: Worker;
  private message: Message;
  form: FormGroup;

  constructor (workerService: WorkerService) {
    this.workerService = workerService;
    this.worker = new Worker();
    this.message = new Message('', '');
    }

  ngOnInit() {
    this.form = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required , Validators.minLength(8)]),
      'name' : new FormControl(null, [Validators.required , Validators.maxLength(20)])
    });
  }

  addWorker(): void {
       this.workerService.addWorker(this.worker)
         .subscribe((worker: Worker | any) => {
           if (worker.hasOwnProperty('id')) {
             this.message = new Message('Success', 'success');
             this.message.show();
           }else {
             this.message = new Message(worker.message, 'danger');
           }
          });
  }
}
