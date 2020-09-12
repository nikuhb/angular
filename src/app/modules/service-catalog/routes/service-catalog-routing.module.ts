import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceCatalogComponent } from '../components/service-catalog/service-catalog.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceCatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceCatalogRoutingModule { }
