import { TestBed } from '@angular/core/testing';

import { TournoiService } from './tournoi-service.service';

describe('TournoiServiceService', () => {
  let service: TournoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
