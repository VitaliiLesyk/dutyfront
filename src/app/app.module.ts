import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import {WorkerService} from './service/worker.service';
import {AdminModule} from './AdminPage/admin.module';
import {HttpClientModule} from '@angular/common/http';
import {TaskService} from './service/task.service';
import {DutyService} from './service/duty.service';
import {FormsModule} from '@angular/forms';


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
    FormsModule
  ],
  providers: [WorkerService, TaskService, DutyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
