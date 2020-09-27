import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './routes/account-routing.module';
import { AccountComponent } from './components/account/account.component';
import { AccountOrderComponent } from './components/account-order/account-order.component';
import { AccountPersonalInformationComponent } from './components/account-personal-information/account-personal-information.component';
import { AccountVoucherComponent } from './components/account-voucher/account-voucher.component';
import { AccountWishlistComponent } from './components/account-wishlist/account-wishlist.component';
import { AccountLoginFormComponent } from './components/account-login-form/account-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountComponent,
    AccountLoginFormComponent,
    AccountOrderComponent,
    AccountPersonalInformationComponent,
    AccountVoucherComponent,
    AccountWishlistComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }

