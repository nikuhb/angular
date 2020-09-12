import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainRegistrationComponent } from './components/domain-registration/domain-registration.component';
import { DomainRegistrationRoutingModule } from './routes/domain-registration-routing.module';

@NgModule({
  declarations: [DomainRegistrationComponent],
  imports: [
    CommonModule,
    DomainRegistrationRoutingModule,
  ]
})
export class DomainRegistrationModule { }
