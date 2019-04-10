import { TestBed } from '@angular/core/testing';

import { MedioDePagoService } from './medio-de-pago.service';

describe('MedioDePagoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedioDePagoService = TestBed.get(MedioDePagoService);
    expect(service).toBeTruthy();
  });
});
