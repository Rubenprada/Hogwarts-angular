import { TestBed } from '@angular/core/testing';

import { ApiHousesService } from './api-homes.service';

describe('ApiHousesService', () => {
  let service: ApiHousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
