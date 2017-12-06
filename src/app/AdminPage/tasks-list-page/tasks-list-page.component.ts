import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task.model';
import {TasksService} from '../../service/tasks.service';

@Component({
  selector: 'app-tasks-list-page',
  templateUrl: './tasks-list-page.component.html',
  styleUrls: ['./tasks-list-page.component.css']
})
export class TasksListPageComponent implements OnInit {

  tasks: Task[];
  constructor(
   private taskService: TasksService) { }

  ngOnInit() {
    this.getTaskList();
  }
  getTaskList(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = (tasks as (Task[])),error => console.log(error),() =>{}
      );
  }
  deleteTask(id: number): void {
    this.taskService.deleteTasks(id)
      .subscribe();
  }
}
