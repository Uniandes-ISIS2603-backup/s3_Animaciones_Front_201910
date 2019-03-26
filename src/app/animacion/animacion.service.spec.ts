import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Animacion} from './animacion';
import {AnimacionService} from './animacion.service';
import {AppModule} from '../app.module';


describe('Service: AnimacionService', () => {
    let injector: TestBed;
    let service: AnimacionService;
    const animaciones: Animacion[] = require('../../assets/animaciones.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, AnimacionService]
        });
        injector = getTestBed();
        service = injector.get(AnimacionService);
    });
    
    it('#getAnimaciones should return value from observable',
       (done: DoneFn) => {
           service.getAnimaciones().subscribe(value => {
               expect(value.length).toBeGreaterThan(0);
               done();
           });
       });
    
});
