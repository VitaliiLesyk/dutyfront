import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageComponent} from './page.component';
import {AddTaskPageComponent} from './add-task-page/add-task-page.component';
import {AddWorkerPageComponent} from './add-worker-page/add-worker-page.component';
import {TasksListPageComponent} from './tasks-list-page/tasks-list-page.component';
import {WorkerListPageComponent} from './worker-list-page/worker-list-page.component';
import {UpdateWorkerPageComponent} from './update-worker-page/update-worker-page.component';
import {UpdateTaskPageComponent} from './update-task-page/update-task-page.component';
import {WorkerPageComponent} from './worker-page/worker-page.component';
import {DutyPageComponent} from './duty-page/duty-page.component';
import {AdminCanActivateImpl} from "../guards/AdminCanActivateImpl";
import {UserCanActivateImpl} from "../guards/UserCanActivateImpl";
import {FiredWorkersListPageComponent} from "./fired-workers-list-page/fired-workers-list-page.component";



const routes: Routes = [
  {path: 'page', component: PageComponent, children: [
      {path: 'add-task' , canActivate: [AdminCanActivateImpl], component: AddTaskPageComponent},
      {path: 'add-worker', canActivate: [AdminCanActivateImpl], component: AddWorkerPageComponent},
      {path: 'tasks-list', canActivate: [UserCanActivateImpl], component: TasksListPageComponent},
      {path: 'workers-list', canActivate: [UserCanActivateImpl], component: WorkerListPageComponent},
      {path: 'update-worker/:id', canActivate: [AdminCanActivateImpl], component: UpdateWorkerPageComponent },
      {path: 'update-task/:id', canActivate: [AdminCanActivateImpl], component: UpdateTaskPageComponent},
      {path: 'worker/:id', canActivate: [AdminCanActivateImpl], component: WorkerPageComponent},
      {path: 'duty/:id', canActivate: [UserCanActivateImpl], component: DutyPageComponent},
      {path: 'fired-workers-list', canActivate: [AdminCanActivateImpl], component: FiredWorkersListPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageRoutingModule {}
