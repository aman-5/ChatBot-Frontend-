import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderchatComponent } from './orderchat.component';

describe('OrderchatComponent', () => {
  let component: OrderchatComponent;
  let fixture: ComponentFixture<OrderchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
