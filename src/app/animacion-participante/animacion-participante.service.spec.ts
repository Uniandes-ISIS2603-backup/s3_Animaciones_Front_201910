import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AnimacionParticipante} from './animacion-participante';
import {AnimacionParticipanteService} from './animacion-participante.service';
import {AppModule} from '../app.module';


describe('Service: AnimacionParticipanteService', () => {
    let injector: TestBed;
    let service: AnimacionParticipanteService;
    //const animacionesParticipantes: AnimacionParticipante[] = require('../../assets/animaciones.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, AnimacionParticipanteService]
        });
        injector = getTestBed();
        service = injector.get(AnimacionParticipanteService);
    });
    
    it('#getAnimacionesParticipantes should return value from observable',
       (done: DoneFn) => {
           service.getAnimacionesParticipantes().subscribe(value => {
               expect(value.length).toBeGreaterThan(0);
               done();
           });
       });
    
});
