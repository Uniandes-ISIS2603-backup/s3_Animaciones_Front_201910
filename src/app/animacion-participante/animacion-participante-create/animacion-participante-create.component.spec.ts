import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, convertToParamMap} from '@angular/router';

import { AnimacionParticipanteCreateComponent } from './animacion-participante-create.component';
import {AppModule} from '../../app.module';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {AnimacionParticipanteService} from '../animacion-participante.service';
import {AnimacionParticipante} from '../animacion-participante';

describe('AnimacionCreateComponent', () => {
  let component: AnimacionParticipanteCreateComponent;
  let fixture: ComponentFixture<AnimacionParticipanteCreateComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [AppRoutingModule, HttpClientModule, AppModule],
          declarations: [ AnimacionParticipanteCreateComponent ],
          providers: [
              {
                  provide: APP_BASE_HREF,
                  useValue: ''
              },
              AnimacionParticipanteService,
              {
                  provide: ActivatedRoute,
                  useValue: {
                      snapshot: {
                          paramMap: convertToParamMap({id: 100})
                      }
                  }
              }
          ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionParticipanteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
