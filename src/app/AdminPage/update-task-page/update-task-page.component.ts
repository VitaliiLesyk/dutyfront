import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task.model';
import {TasksService} from '../../service/tasks.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-add-task-page',
  templateUrl: './update-task-page.component.html',
  styleUrls: ['./update-task-page.component.css']
})
export class UpdateTaskPageComponent implements OnInit {

  task: Task ;

  constructor( private taskService: TasksService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.taskService.getOneTask(id)
      .subscribe(task => {
        this.task = (task as (Task));
        }, error => console.log(error), () => {
      });
  }
  updateTask(task: Task): void {
    this.taskService.updateTask(this.task)
      .subscribe(task => console.log(task as (Task)), error => console.log(error));
  }
}
