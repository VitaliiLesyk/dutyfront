import { Component, OnInit } from '@angular/core';
import {Duty} from '../../models/duty.model';
import {DutyService} from '../../service/duty.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-duty-page',
  templateUrl: './duty-page.component.html',
  styleUrls: ['./duty-page.component.css']
})
export class DutyPageComponent implements OnInit {
  public duty : Duty;
  constructor(
    private dutyService: DutyService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.duty = new Duty();
  }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.dutyService.getReadyByWorkerId(id)
      .subscribe(duty => {
        this.duty = (duty as (Duty));
        console.log(this.duty);
       },error => console.log(error), () => {
          });
  }



}
