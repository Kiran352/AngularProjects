import { TestBed } from '@angular/core/testing';

import { BikeServiceService } from './bike-service.service';

describe('BikeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeServiceService = TestBed.get(BikeServiceService);
    expect(service).toBeTruthy();
  });
});
