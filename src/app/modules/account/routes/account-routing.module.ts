import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '../components/account/account.component';
import { AccountOrderComponent } from '../components/account-order/account-order.component';
import { AccountPersonalInformationComponent } from '../components/account-personal-information/account-personal-information.component';
import { AccountVoucherComponent } from '../components/account-voucher/account-voucher.component';
import { AccountWishlistComponent } from '../components/account-wishlist/account-wishlist.component';
import { AccountLoginFormComponent } from '../components/account-login-form/account-login-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: AccountLoginFormComponent,
  },
  {
    path: 'order',
    component: AccountOrderComponent,
  },
  {
    path: 'personal-information',
    component: AccountPersonalInformationComponent,
  },
  {
    path: 'voucher',
    component: AccountVoucherComponent,
  },
  {
    path: 'wishlist',
    component: AccountWishlistComponent,
  },
  {
    path: '',
    component: AccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
