import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentchatComponent } from './paymentchat.component';

describe('PaymentchatComponent', () => {
  let component: PaymentchatComponent;
  let fixture: ComponentFixture<PaymentchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
