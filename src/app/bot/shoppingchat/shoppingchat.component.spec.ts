import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingchatComponent } from './shoppingchat.component';

describe('ShoppingchatComponent', () => {
  let component: ShoppingchatComponent;
  let fixture: ComponentFixture<ShoppingchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
