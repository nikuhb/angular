import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  private router: Router,
  ) {
    this.currentUser = accountService.currentUser;
  }

  ngOnInit(): void {

  }

  logOut(): void {
    this.accountService
      .logOut();

    this.router.navigate(['account/login']);
  }

}


