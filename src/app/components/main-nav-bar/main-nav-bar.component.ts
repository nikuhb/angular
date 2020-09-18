import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/models/account.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss']
})
export class MainNavBarComponent implements OnInit {

  currentUser: BehaviorSubject<IUser>;

  constructor(
  private accountService: AccountService,
  ) {
    this.currentUser = accountService.currentUser;
  }

  ngOnInit(): void {

  }

}

