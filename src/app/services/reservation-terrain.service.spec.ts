import { TestBed } from '@angular/core/testing';

import { ReservationTerrainService } from './reservation-terrain.service';

describe('ReservationTerrainService', () => {
  let service: ReservationTerrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationTerrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
