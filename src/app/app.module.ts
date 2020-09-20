import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavBarComponent } from './components/main-nav-bar/main-nav-bar.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavBarComponent,
    LeftPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AccountService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
