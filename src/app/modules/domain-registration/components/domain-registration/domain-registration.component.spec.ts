import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainRegistrationComponent } from './domain-registration.component';

describe('DomainRegistrationComponent', () => {
  let component: DomainRegistrationComponent;
  let fixture: ComponentFixture<DomainRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
