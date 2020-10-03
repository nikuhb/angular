import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '../components/account/account.component';
import { AccountOrderComponent } from '../components/account-order/account-order.component';
import { AccountPersonalInformationComponent } from '../components/account-personal-information/account-personal-information.component';
import { AccountVoucherComponent } from '../components/account-voucher/account-voucher.component';
import { AccountWishlistComponent } from '../components/account-wishlist/account-wishlist.component';
import { AccountLoginFormComponent } from '../components/account-login-form/account-login-form.component';
import { AuthGuard } from '../../../guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: AccountLoginFormComponent,
  },
  {
    path: 'order',
    component: AccountOrderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'personal-information',
    component: AccountPersonalInformationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'voucher',
    component: AccountVoucherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'wishlist',
    component: AccountWishlistComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AccountComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

