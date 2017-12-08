import {Component, OnInit} from '@angular/core';
import { WorkerService } from '../../service/worker.service';
import { Worker} from '../../models/worker.model';
import {ActivatedRoute} from '@angular/router';
import {Message} from '../../models/message.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-worker-page',
  templateUrl: './update-worker-page.component.html',
  styleUrls: ['./update-worker-page.component.css']
})
export class UpdateWorkerPageComponent implements OnInit {
  private workerService: WorkerService;
  private route: ActivatedRoute;
  private worker: Worker;
  private message: Message;
  form: FormGroup;
  constructor (workerService: WorkerService,
               route: ActivatedRoute) {
    this.workerService = workerService;
    this.route = route;
    this.worker = new Worker();
    this.message = new Message('', '');
  }

 public ngOnInit() {
    this.form = new FormGroup({
     'email' : new FormControl(null, [Validators.required, Validators.email]),
     'password' : new FormControl(null, [Validators.required , Validators.minLength(8)]),
     'name' : new FormControl(null, [Validators.required , Validators.maxLength(20)])
   });
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.workerService.getOneWorker(id)
      .subscribe(worker => {
        this.worker = (worker as (Worker));
        console.log(this.worker);
      }, error => console.log(error), () => {
      });
    }

    public updateWorker(): void {
    this.workerService.updateWorker(this.worker)
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
