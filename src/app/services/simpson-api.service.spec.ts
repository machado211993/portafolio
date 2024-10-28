import { TestBed } from '@angular/core/testing';

import { SimpsonApiService } from './simpson-api.service';

describe('SimpsonApiService', () => {
  let service: SimpsonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpsonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
