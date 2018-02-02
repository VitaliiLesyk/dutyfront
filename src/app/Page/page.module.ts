import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';



import {SharedModule} from '../shared/shared.module';
import {PageRoutingModule} from './page-routing.module';
import {WorkerListPageComponent} from './worker-list-page/worker-list-page.component';
import {TasksListPageComponent} from './tasks-list-page/tasks-list-page.component';
import {AddWorkerPageComponent} from './add-worker-page/add-worker-page.component';
import {AddTaskPageComponent} from './add-task-page/add-task-page.component';
import {PageComponent} from './page.component';
import {UpdateWorkerPageComponent} from './update-worker-page/update-worker-page.component';
import {UpdateTaskPageComponent} from './update-task-page/update-task-page.component';

import {FormsModule} from '@angular/forms';
import {WorkerPageComponent} from './worker-page/worker-page.component';
import {DutyPageComponent } from './duty-page/duty-page.component';
import {FiredWorkersListPageComponent} from "./fired-workers-list-page/fired-workers-list-page.component";



@NgModule({
  imports : [
    CommonModule,
    SharedModule,
    PageRoutingModule,
    FormsModule
  ],
  declarations: [
    WorkerListPageComponent,
    TasksListPageComponent,
    AddWorkerPageComponent,
    AddTaskPageComponent,
    UpdateWorkerPageComponent,
    UpdateTaskPageComponent,
    PageComponent,
    WorkerPageComponent,
    DutyPageComponent,
    FiredWorkersListPageComponent
  ],
})

export class PageModule {}
