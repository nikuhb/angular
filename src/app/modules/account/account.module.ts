import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './routes/account-routing.module';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
  ]
})
export class AccountModule { }

