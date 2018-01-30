import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../service/auth.service";
import {UserModel} from "../../models/user.model";
import {AuthModel} from "../../models/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private authService: AuthService;
  private userModel: UserModel;

  constructor(authService: AuthService) {
    this.authService = authService;
    this.userModel = new UserModel();
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required , Validators.minLength(6)])
    });
  }

  public authentication(): void {
    this.authService.authentication(this.userModel).subscribe((authModel: AuthModel | any) => {
           if (authModel.hasOwnProperty('token')) {
             localStorage.setItem('x-access-token', authModel.token);
           }
    });
  }

}
