import { TestBed } from '@angular/core/testing';

import { MySoonsService } from './my-soons.service';

describe('MySoonsService', () => {
  let service: MySoonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySoonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
