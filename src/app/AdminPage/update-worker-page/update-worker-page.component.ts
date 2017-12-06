import {Component, OnInit} from '@angular/core';
import { WorkersService } from '../../service/workers.service';
import { Worker} from '../../models/worker.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-add-worker-page',
  templateUrl: './update-worker-page.component.html',
  styleUrls: ['./update-worker-page.component.css']
})
export class UpdateWorkerPageComponen implements OnInit {


  worker: Worker;

  constructor (
    private workerService: WorkersService,
    private route: ActivatedRoute,
    private router: Router
                ) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.workerService.getOneWorker(id)
      .subscribe(worker => {
        this.worker = (worker as (Worker));
        console.log(this.worker);
      }, error => console.log(error), () => {
      });
  }
  updateWorker(worker: Worker): void {
    this.workerService.updateWorker(this.worker)
      .subscribe(() => {
          console.log(this.worker);
          this.router.navigate(['/admin/workers-list/']);
        },
        error => {
          console.log(error);
        });
  }
}
