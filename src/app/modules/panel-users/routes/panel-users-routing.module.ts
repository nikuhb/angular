import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PanelUsersComponent } from '../components/panel-users/panel-users.component';

const routes: Routes = [
  {
    path: '',
    component: PanelUsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelUsersRoutingModule { }
