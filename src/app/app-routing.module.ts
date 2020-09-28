import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'panel-users',
    loadChildren: () => import('./modules/panel-users/panel-users.module').then(m => m.PanelUsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'service-catalog',
    loadChildren: () => import('./modules/service-catalog/service-catalog.module').then(m => m.ServiceCatalogModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'customer-billing',
    loadChildren: () => import('./modules/customer-billing/customer-billing.module').then(m => m.CustomerBillingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'provisioning',
    loadChildren: () => import('./modules/provisioning/provisioning.module').then(m => m.ProvisioningModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'applications',
    loadChildren: () => import('./modules/applications/applications.module').then(m => m.ApplicationsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'domain-registration',
    loadChildren: () => import('./modules/domain-registration/domain-registration.module').then(m => m.DomainRegistrationModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reports',
    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule),
    canActivate: [AuthGuard],
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
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
