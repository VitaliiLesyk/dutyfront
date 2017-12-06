import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import { WorkerListPageComponent } from './worker-list-page/worker-list-page.component';
import { TasksListPageComponent } from './tasks-list-page/tasks-list-page.component';
import { AddWorkerPageComponent } from './add-worker-page/add-worker-page.component';
import { AddTaskPageComponent } from './add-task-page/add-task-page.component';
import { AdminComponent } from './admin.component';
import {UpdateWorkerPageComponen} from './update-worker-page/update-worker-page.component';
import {UpdateTaskPageComponent} from './update-task-page/update-task-page.component';



@NgModule({
  imports : [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    WorkerListPageComponent,
    TasksListPageComponent,
    AddWorkerPageComponent,
    AddTaskPageComponent,
    UpdateWorkerPageComponen,
    UpdateTaskPageComponent,
    AdminComponent
  ]
})

export class AdminModule {}
