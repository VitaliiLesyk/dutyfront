import {Component, OnInit} from '@angular/core';
import {Task} from '../../models/task.model';
import {TaskService} from '../../service/task.service';
import {Message} from '../../models/message.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.css']
})
export class AddTaskPageComponent implements OnInit {
  private taskService: TaskService;
  private task: Task;
  private message: Message;
  form: FormGroup;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
    this.task = new Task();
    this.message = new Message('', '');
  }

  public ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(20)])
    });
  }

  public addTask(): void {
    this.taskService.addTask(this.task)
      .subscribe((task: Task | any) => {
        if (task.hasOwnProperty('id')) {
          this.message = new Message('Success', 'success');
          this.message.show();
        }}, error => {
        this.message = new Message('Error from server', 'danger');
        });
  }
}
