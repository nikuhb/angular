import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '../components/account/account.component';
import { AccountOrderComponent } from '../components/account-order/account-order.component';
const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  {
    path: 'Amir',
    component: AccountOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
