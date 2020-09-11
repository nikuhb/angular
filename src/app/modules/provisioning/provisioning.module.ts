import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvisionRoutingModule } from './routes/provisioning-routing.module';
import { ProvisioningComponent } from './components/provisioning/provisioning.component';

@NgModule({
  declarations: [ProvisioningComponent],
  imports: [
    CommonModule,
    ProvisionRoutingModule,
  ]
})
export class ProvisioningRoutingModule { }