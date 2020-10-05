import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-personal-information',
  templateUrl: './account-personal-information.component.html',
  styleUrls: ['./account-personal-information.component.scss']
})
export class AccountPersonalInformationComponent implements OnInit {

  personalInformationForm = new FormGroup({
    address: new FormControl(),
    age: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    password: new FormControl(),
    passwordValidation: new FormControl(),
    telephone: new FormControl(),
    userName: new FormControl(),
  });

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this
      .accountService
      .currentUser
      .subscribe(currentUser => this.handleCurrentUserChange(currentUser));
  }
    private handleCurrentUserChange(currentUser: IUser): void {
    this
      .personalInformationForm
      .patchValue(currentUser);
  }

}
