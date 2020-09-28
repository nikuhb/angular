import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser, UserList } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currentUser: BehaviorSubject<IUser> = new BehaviorSubject (undefined);

  constructor() {
  }

  logOut(): void {
    this.currentUser.next(undefined);
  }

  login(userName: string, password: string): Observable<IUser>{
    const users = UserList;
    const userFounded = users.find(user => user.userName === userName && user.password === password);
    this.currentUser.next(userFounded);
    return of(userFounded);
  }
}

