import {TestBed} from '@angular/core/testing';

import {DistService} from './dist.service';

describe('DistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistService = TestBed.get(DistService);
    expect(service).toBeTruthy();
  });
});
