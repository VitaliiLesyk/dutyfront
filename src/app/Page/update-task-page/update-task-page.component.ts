import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task.model';
import {TaskService} from '../../service/task.service';
import {ActivatedRoute} from '@angular/router';
import {Message} from '../../models/message.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-task-page',
  templateUrl: './update-task-page.component.html',
  styleUrls: ['./update-task-page.component.css']
})
export class UpdateTaskPageComponent implements OnInit {

  private taskService: TaskService;
  private route: ActivatedRoute;
  private task: Task;
  private message: Message;
  form: FormGroup;

  constructor( taskService: TaskService,
               route: ActivatedRoute) {
    this.taskService = taskService;
    this.route = route;
    this.task = new Task();
    this.message = new Message('', '');
  }

  ngOnInit() {
    this.form = new FormGroup({
      'name' : new FormControl(null, [Validators.required , Validators.maxLength(20)])
    });
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.taskService.getOneTask(id)
      .subscribe(task => {
        this.task = (task as (Task));
        });
  }
  updateTask(): void {
    this.taskService.updateTask(this.task)
      .subscribe((task: Task | any) => {
        if (task.hasOwnProperty('id')) {
          this.message = new Message('Success', 'success');
          this.message.show();
        }}, error => {
        this.message = new Message('Error from server', 'danger');
      });
  }
}
