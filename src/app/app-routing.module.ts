import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
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
    loadChildren: () => import('./modules/customer-billing/customer-billing.module').then(m => m.CustomerBillingModule)
  },
  {
    path: 'provisioning',
    loadChildren: () => import('./modules/provisioning/provisioning.module').then(m => m.ProvisioningModule)
  },
  {
    path: 'applications',
    loadChildren: () => import('./modules/applications/applications.module').then(m => m.ApplicationsModule)
  },
  {
    path: 'domain-registration',
    loadChildren: () => import('./modules/domain-registration/domain-registration.module').then(m => m.DomainRegistrationModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./modules/help/help.module').then(m => m.HelpModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
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
