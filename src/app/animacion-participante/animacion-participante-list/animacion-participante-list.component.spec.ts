import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import { AnimacionParticipanteListComponent } from './animacion-participante-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {AnimacionParticipanteService} from '../animacion-participante.service';
import {AnimacionParticipante} from '../animacion-participante';

describe('AnimacionParticipanteListComponent', () => {
  let component: AnimacionParticipanteListComponent;
    let fixture: ComponentFixture<AnimacionParticipanteListComponent>;
   // const animaciones: AnimacionParticipante[] = require('../../../assets/animaciones.json');

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [AppRoutingModule, HttpClientModule, AppModule],
          declarations: [ AnimacionParticipanteListComponent ],
          providers: [{provide:  APP_BASE_HREF, useValue: ''}, AnimacionParticipanteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionParticipanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
