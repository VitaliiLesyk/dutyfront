import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RedirectFromLogin} from "./guards/RedirectFromLogin";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule {}
