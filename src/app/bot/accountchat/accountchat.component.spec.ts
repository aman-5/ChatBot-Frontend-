import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountchatComponent } from './accountchat.component';

describe('AccountchatComponent', () => {
  let component: AccountchatComponent;
  let fixture: ComponentFixture<AccountchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
