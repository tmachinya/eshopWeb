import { TestBed } from '@angular/core/testing';

import { InitiatorService } from './initiator.service';

describe('InitiatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitiatorService = TestBed.get(InitiatorService);
    expect(service).toBeTruthy();
  });
});
