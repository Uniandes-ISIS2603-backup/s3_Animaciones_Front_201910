import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, convertToParamMap} from '@angular/router';

import { AnimacionParticipanteEditComponent } from './animacion-participante-edit.component';
import {AppModule} from '../../app.module';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {AnimacionParticipanteService} from '../animacion-participante.service';
import {AnimacionParticipante} from '../animacion-participante';

describe('AnimacionEditComponent', () => {
  let component: AnimacionParticipanteEditComponent;
  let fixture: ComponentFixture<AnimacionParticipanteEditComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [AppRoutingModule, HttpClientModule, AppModule],
          declarations: [ AnimacionParticipanteEditComponent ],
          providers: [
              {
                  privide: APP_BASE_HREF,
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
    fixture = TestBed.createComponent(AnimacionParticipanteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
