import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelUsersRoutingModule } from './routes/panel-users-routing.module';
import { PanelUsersComponent } from './components/panel-users/panel-users.component';

@NgModule({
  declarations: [PanelUsersComponent],
  imports: [
    CommonModule,
    PanelUsersRoutingModule,
  ]
})
export class PanelUsersModule { }
