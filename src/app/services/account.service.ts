import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser, UserList } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currentUser: BehaviorSubject<IUser> = new BehaviorSubject (undefined);

  constructor(
    private router: Router
  ) {
    this.currentUser
      .subscribe(user => this.validateUser(user));
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

  validateUser(user: IUser): void {
    if (user) {
      this.router.navigate(['home']);
    }
  }
}


