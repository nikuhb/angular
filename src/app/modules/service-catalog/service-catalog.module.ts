import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCatalogComponent } from './components/service-catalog/service-catalog.component';
import { ServiceCatalogRoutingModule } from './routes/service-catalog-routing.module';

@NgModule({
  declarations: [ServiceCatalogComponent],
  imports: [
    ServiceCatalogRoutingModule,
    CommonModule
  ]
})
export class ServiceCatalogModule { }
