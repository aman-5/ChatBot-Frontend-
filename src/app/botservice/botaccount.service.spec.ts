import { TestBed } from '@angular/core/testing';

import { BotaccountService } from './botaccount.service';

describe('BotaccountService', () => {
  let service: BotaccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotaccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
