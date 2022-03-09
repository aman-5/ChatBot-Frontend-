import { TestBed } from '@angular/core/testing';

import { BotshoppingService } from './botshopping.service';

describe('BotshoppingService', () => {
  let service: BotshoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotshoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
