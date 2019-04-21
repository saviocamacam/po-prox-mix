import { TestBed } from '@angular/core/testing';

import { EnteringService } from './entering.service';

describe('EnteringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnteringService = TestBed.get(EnteringService);
    expect(service).toBeTruthy();
  });
});
