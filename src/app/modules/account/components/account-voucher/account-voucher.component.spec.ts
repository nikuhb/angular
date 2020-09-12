import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountVoucherComponent } from './account-voucher.component';

describe('AccountVoucherComponent', () => {
  let component: AccountVoucherComponent;
  let fixture: ComponentFixture<AccountVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
