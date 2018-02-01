import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { WorkerService } from './service/worker.service';
import { PageModule } from './Page/page.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './service/task.service';
import { DutyService } from './service/duty.service';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from './service/auth.service';
import {HttpClientWrapper} from './auth/wrapper/HttpClientWrapper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    PageModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
  ],
  providers: [WorkerService, TaskService, DutyService, AuthService, HttpClientWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
