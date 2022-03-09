import { TestBed } from '@angular/core/testing';

import { OtherissuesService } from './otherissues.service';

describe('OtherissuesService', () => {
  let service: OtherissuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherissuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
