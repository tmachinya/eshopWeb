import { TestBed } from '@angular/core/testing';

import { ReceiveProductsService } from './receive-products.service';

describe('ReceiveProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceiveProductsService = TestBed.get(ReceiveProductsService);
    expect(service).toBeTruthy();
  });
});
