import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';
import {AddTaskPageComponent} from './add-task-page/add-task-page.component';
import {AddWorkerPageComponent} from './add-worker-page/add-worker-page.component';
import {TasksListPageComponent} from './tasks-list-page/tasks-list-page.component';
import {WorkerListPageComponent} from './worker-list-page/worker-list-page.component';
import {UpdateWorkerPageComponent} from './update-worker-page/update-worker-page.component';
import {UpdateTaskPageComponent} from './update-task-page/update-task-page.component';
import {WorkerPageComponent} from "./worker-page/worker-page.component";
import {DutyPageComponent} from "./duty-page/duty-page.component";




const routes: Routes = [
  {path: 'admin', component: AdminComponent, children: [
      {path: 'add-task', component: AddTaskPageComponent},
      {path: 'add-worker', component: AddWorkerPageComponent},
      {path: 'tasks-list', component: TasksListPageComponent},
      {path: 'workers-list', component: WorkerListPageComponent},
      {path: 'update-worker/:id', component: UpdateWorkerPageComponent },
      {path: 'update-task/:id', component: UpdateTaskPageComponent},
      {path: 'worker/:id', component: WorkerPageComponent},
      {path: 'duty/:id', component: DutyPageComponent},

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
