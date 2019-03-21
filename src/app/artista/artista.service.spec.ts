import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Artista} from './artista';
import {ArtistaService} from './artista.service';
import {AppModule} from '../app.module';


describe('Service: ArtistaService', () => {
    let injector: TestBed;
    let service: ArtistaService;
    const artistas: Artista[] = require('../../assets/artistas.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, ArtistaService]
        });
        injector = getTestBed();
        service = injector.get(ArtistaService);
    });
    
    it('#getArtista should return value from observable',
    (done: DoneFn) => {
    service.getArtistas().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
    it('#getArtistaDetail should return an existing author',
    (done: DoneFn) => {
    service.getArtistaDetail(artistas[0].id).subscribe(value => {
        expect(value.nombre).toEqual(artistas[0].nombre);
        done();
        });
    });
    
});
