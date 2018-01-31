import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { WorkerService } from './service/worker.service';
import { AdminModule } from './AdminPage/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './service/task.service';
import { DutyService } from './service/duty.service';
import { FormsModule } from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "./service/auth.service";
import {HttpClientWrapper} from "./auth/wrapper/HttpClientWrapper";
import {AdminCanActivateImpl} from "./guards/AdminCanActivateImpl";
import {UserCanActivateImpl} from "./guards/UserCanActivateImpl";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
  ],
  providers: [WorkerService, TaskService, DutyService, AuthService, HttpClientWrapper, AdminCanActivateImpl, UserCanActivateImpl],
  bootstrap: [AppComponent]
})
export class AppModule { }
