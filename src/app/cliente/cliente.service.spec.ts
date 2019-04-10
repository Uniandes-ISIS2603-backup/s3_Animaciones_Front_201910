import { TestBed, getTestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Cliente} from './cliente';
import {AppModule} from '../app.module';
import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
  let injector: TestBed;
  let service: ClienteService;
  const clientes: Cliente[] = require('../../assets/clientes.json');
  
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule, AppModule],
        declarations: [],
        providers: [{provide: APP_BASE_HREF, useValue: ''}, ClienteService]
    });
    injector = getTestBed();
    service = injector.get(ClienteService);
});



it('#getClientes should return value from observable',
(done: DoneFn) => {
  service.getClientes().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
    });
});

});
