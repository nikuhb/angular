import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainRoutingModule } from './routes/domain-registration-routing.module';
import { DomainRegistrationComponent } from './components/domain-registration/domain-registration.component';



@NgModule({
  declarations: [DomainRegistrationComponent],
  imports: [
    CommonModule,
    DomainRoutingModule,
  ]
})
export class DomainRegistrationModule { }
