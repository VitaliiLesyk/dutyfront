import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import {WorkersService} from './service/workers.service';
import {AdminModule} from './AdminPage/admin.module';
import {HttpClientModule} from '@angular/common/http';
import {TasksService} from './service/tasks.service';


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
    HttpClientModule
  ],
  providers: [WorkersService, TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
