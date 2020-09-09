import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CustomerBillingComponent } from '../components/customer-billing/customer-billing.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerBillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerBillingRoutingModule { }
