import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPersonalInformationComponent } from './account-personal-information.component';

describe('AccountPersonalInformationComponent', () => {
  let component: AccountPersonalInformationComponent;
  let fixture: ComponentFixture<AccountPersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
