import {TestBed} from '@angular/core/testing';

import {MrbLoggingService} from './mrb-logging.service';

describe('MrbLoggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MrbLoggingService = TestBed.get(MrbLoggingService);
    expect(service).toBeTruthy();
  });
});
