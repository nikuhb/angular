import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-login-form',
  templateUrl: './account-login-form.component.html',
  styleUrls: ['./account-login-form.component.scss']
})
export class AccountLoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl (''),
    password: new FormControl (''),
  });


  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
  }

  submitLoginForm(): void {
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    this.accountService
      .login(userName, password)
      .subscribe(ans => this.handleLogin(ans));
  }

  handleLogin(user: IUser): void {
    if (user) {
      console.log(':D', { user });
    } else {
      this.loginForm
        .setErrors({
          authentication: 'Invalid user'
        });
    }
  }

}


