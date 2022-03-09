import { TestBed } from '@angular/core/testing';

import { BotordersService } from './botorders.service';

describe('BotordersService', () => {
  let service: BotordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
