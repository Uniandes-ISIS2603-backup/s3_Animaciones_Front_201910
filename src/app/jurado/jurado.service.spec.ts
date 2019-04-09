import { TestBed } from '@angular/core/testing';

import { JuradoService } from './jurado.service';

describe('JuradoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JuradoService = TestBed.get(JuradoService);
    expect(service).toBeTruthy();
  });
});
