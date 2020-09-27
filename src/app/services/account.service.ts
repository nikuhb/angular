import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser, UserList } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currentUser: BehaviorSubject<IUser> = new BehaviorSubject (undefined);

  constructor() {
    this.currentUser.next(UserList[4]);
  }

  logOut(): void {
    this.currentUser.next(undefined);
  }

  login(userName: string, password: string): Observable<IUser>{
    const users = UserList;
    const userFounded = users.find(user => user.userName === userName && user.password);
    return of(userFounded);
  }
}

