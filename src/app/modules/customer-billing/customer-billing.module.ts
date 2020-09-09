import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerBillingComponent } from './components/customer-billing/customer-billing.component';
import { CustomerBillingRoutingModule } from './routes/customer-billing-routing.module';

@NgModule({
  declarations: [CustomerBillingComponent],
  imports: [
    CustomerBillingRoutingModule,
    CommonModule
  ]
})
export class CustomerBillingModule { }
