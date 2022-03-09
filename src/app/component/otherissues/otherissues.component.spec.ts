import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherissuesComponent } from './otherissues.component';

describe('OtherissuesComponent', () => {
  let component: OtherissuesComponent;
  let fixture: ComponentFixture<OtherissuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherissuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
