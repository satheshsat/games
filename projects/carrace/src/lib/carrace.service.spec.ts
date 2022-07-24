import { TestBed } from '@angular/core/testing';

import { CarraceService } from './carrace.service';

describe('CarraceService', () => {
  let service: CarraceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarraceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
