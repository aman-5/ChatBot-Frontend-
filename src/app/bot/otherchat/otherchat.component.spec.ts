import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherchatComponent } from './otherchat.component';

describe('OtherchatComponent', () => {
  let component: OtherchatComponent;
  let fixture: ComponentFixture<OtherchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
