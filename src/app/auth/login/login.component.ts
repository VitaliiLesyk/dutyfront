import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WorkersService} from '../../service/workers.service';
import {Worker } from '../../models/worker.model';


import {Message} from '../../models/message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private workersService: WorkersService
  ) { }

  ngOnInit() {
    this.message  = new Message('danger', '');
    this.form = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required , Validators.minLength(6)])
    });
  }
  private  showMessage(text: string, type: string = 'danger') {
  this.message = new Message(type, text);
  window.setTimeout(() => {
    this.message.text = '';
  }, 5000);
  }

  onSubmit() {}

}
