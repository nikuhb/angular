import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-personal-information',
  templateUrl: './account-personal-information.component.html',
  styleUrls: ['./account-personal-information.component.scss']
})
export class AccountPersonalInformationComponent implements OnInit {

  personalInformationForm = new FormGroup({
    userName: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
    address: new FormControl(),
    telephone: new FormControl(),
    password: new FormControl(),
    passwordValidation: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
