import { SignupvalidComponent } from './signupvalid.component';
import { TestBed } from '@angular/core/testing';


describe('SignupvalidComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SignupvalidComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SignupvalidComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular13FormValidation'`, () => {
    const fixture = TestBed.createComponent(SignupvalidComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular13FormValidation');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SignupvalidComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Angular13FormValidation app is running!');
  });
});