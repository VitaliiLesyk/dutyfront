import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../service/workers.service';
import { Worker } from '../../models/worker.model';
import {Router} from '@angular/router';



@Component({
  selector: 'app-add-worker-page',
  templateUrl: './add-worker-page.component.html',
  styleUrls: ['./add-worker-page.component.css']
})
export class AddWorkerPageComponent implements OnInit {


  worker: Worker = new Worker();

  constructor ( private workerService: WorkersService,private router: Router) {}

  ngOnInit() {
    }

  addWorker(): void {
      this.workerService.addWorker(this.worker)
        .subscribe(()=> {
          console.log(this.worker);
         this.router.navigate(['/admin/workers-list/']);
        },
        error => {
          console.log(error);
        });
  }
}
