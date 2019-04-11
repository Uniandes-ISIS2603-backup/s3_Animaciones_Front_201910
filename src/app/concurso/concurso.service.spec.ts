import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Concurso} from './concurso';
import {ConcursoService} from './concurso.service';
import {AppModule} from '../app.module';


describe('Service: ConcursoService', () => {
    let injector: TestBed;
    let service: ConcursoService;
    const concursos: Concurso[] = require('../../assets/concursos.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, ConcursoService]
        });
        injector = getTestBed();
        service = injector.get(ConcursoService);
    });
    
    it('#getConcursos should return value from observable',
    (done: DoneFn) => {
    service.getConcursos().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
    it('#getConcursosDetail should return an existing concursoDetail',
    (done: DoneFn) => {
    service.getConcursoDetail(concursos[0].id).subscribe(value => {
        expect(value.tema).toEqual(concursos[0].tema);
        done();
        });
    });
    
});
