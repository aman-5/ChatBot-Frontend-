import { TestBed } from '@angular/core/testing';

import { BototherissuesService } from './bototherissues.service';

describe('BototherissuesService', () => {
  let service: BototherissuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BototherissuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
