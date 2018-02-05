import { Component, OnInit } from '@angular/core';
import {Duty} from '../../models/duty.model';
import {DutyService} from '../../service/duty.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminChecker} from "../../guards/AdminChecker";

@Component({
  selector: 'app-duty-page',
  templateUrl: './duty-page.component.html',
  styleUrls: ['./duty-page.component.css']
})
export class DutyPageComponent implements OnInit {
  public passedDuties: Duty[];
  public currentDuty: Duty;
  constructor(
    private dutyService: DutyService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.dutyService.getReadyByWorkerId(id)
      .subscribe(duty => {
        this.currentDuty = duty as (Duty);
      });
    if(this.checkTokenForAdminRole())
      this.dutyService.getPassedByWorkerId(id)
        .subscribe(duties => {
          this.passedDuties = (duties as (Duty[]));
        },error => console.log(error), () => {});
  }

  public checkTokenForAdminRole():boolean{
    let token:string = localStorage.getItem('x-access-token');
    return AdminChecker.isAdmin(token);
  }

}
