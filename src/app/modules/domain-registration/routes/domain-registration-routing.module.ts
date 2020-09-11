import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DomainRegistrationComponent } from '../components/domain-registration/domain-registration.component';

const routes: Routes = [
  {
    path: '',
    component:DomainRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainRoutingModule { }