import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './models/account.model';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myProject';
  name: string;

  currentUser: BehaviorSubject<IUser>;

  constructor(
    private accountService: AccountService,
  ) {
    this.currentUser = accountService.currentUser;
  }
}
