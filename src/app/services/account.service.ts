import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser, UserList } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currentUser: BehaviorSubject<IUser> = new BehaviorSubject (undefined);

  constructor() {
    this.currentUser.next(UserList[0]);
  }

  logOut(): void {
    this.currentUser.next(undefined);
  }
}

