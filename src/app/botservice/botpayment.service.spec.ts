import { TestBed } from '@angular/core/testing';

import { BotpaymentService } from './botpayment.service';

describe('BotpaymentService', () => {
  let service: BotpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
