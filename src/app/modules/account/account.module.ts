import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './routes/account-routing.module';
import { AccountComponent } from './components/account/account.component';
import { AccountOrderComponent } from './components/account-order/account-order.component';
import { AccountPersonalInformationComponent } from './components/account-personal-information/account-personal-information.component';
import { AccountVoucherComponent } from './components/account-voucher/account-voucher.component';
import { AccountWishlistComponent } from './components/account-wishlist/account-wishlist.component';

@NgModule({
  declarations: [AccountComponent, AccountOrderComponent, AccountPersonalInformationComponent, AccountVoucherComponent, AccountWishlistComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
  ]
})
export class AccountModule { }

