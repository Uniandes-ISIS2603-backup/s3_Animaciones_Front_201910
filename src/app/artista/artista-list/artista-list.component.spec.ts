import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { ArtistaListComponent } from './artista-list.component';
import { Artista } from '../artista';
import { ArtistaService } from '../artista.service';
import { AppModule } from '../../app.module';
import { AppRoutingModule } from '../../app-routing/app-routing.module';

describe('ArtistaListComponent', () => {
    let component: ArtistaListComponent;
    let fixture: ComponentFixture<ArtistaListComponent>;
    const artistas: Artista[] = require('../../../assets/artistas.json');

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [AppRoutingModule, HttpClientModule, AppModule],
          declarations: [ ArtistaListComponent ],
          providers: [{provide: APP_BASE_HREF, useValue: ''}, ArtistaService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
