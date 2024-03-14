import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountHomeComponent } from './bank-account-home.component';

describe('BankAccountHomeComponent', () => {
  let component: BankAccountHomeComponent;
  let fixture: ComponentFixture<BankAccountHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
