import { TestBed } from '@angular/core/testing';

import { ApiMySoonsService } from './api-my-soons.service';

describe('ApiMySoonsService', () => {
  let service: ApiMySoonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMySoonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
