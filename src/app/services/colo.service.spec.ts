import { TestBed } from '@angular/core/testing';

import { ColoService } from './colo.service';

describe('ColoService', () => {
  let service: ColoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
