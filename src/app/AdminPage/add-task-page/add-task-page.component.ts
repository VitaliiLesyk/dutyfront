import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task.model';
import {TasksService} from '../../service/tasks.service';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.css']
})
export class AddTaskPageComponent implements OnInit {

  task: Task  = new Task();

  constructor( private taskService: TasksService) { }

  ngOnInit() {
  }
  addTask():void {
    this.taskService.addTask(this.task)
      .subscribe(error => console.log(error),() => {});
  }
}
