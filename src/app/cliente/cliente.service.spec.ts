import { TestBed, getTestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Cliente} from './cliente';
import {AppModule} from '../app.module';
import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
  
    it('should be created', () => {
      const service: ClienteService = TestBed.get(ClienteService);
      expect(service).toBeTruthy();
    });
  });