import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'Home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'panel-users',
    loadChildren: () => import('./modules/panel-users/panel-users.module').then(m => m.PanelUsersModule)
  },
  {
    path: 'service-catalog',
    loadChildren: () => import('./modules/service-catalog/service-catalog.module').then(m => m.ServiceCatalogModule)
  },
  {
    path: 'customer-billing',
    loadChildren: () => import('./modules/customer-billing/customer-billing.module'). then(m => m.CustomerBillingModule)
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
