import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import { ArtistaCreateComponent } from './artista-create.component';
import {AppModule} from '../../app.module';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ArtistaService} from '../artista.service';
import {Artista} from '../artista';

describe('ArtistaCreateComponent', () => {
  let component: ArtistaCreateComponent;
  let fixture: ComponentFixture<ArtistaCreateComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [AppRoutingModule, HttpClientModule, AppModule],
          declarations: [ ArtistaCreateComponent ],
          providers: [
              {
                  provide: APP_BASE_HREF,
                  useValue: ''
              },
              ArtistaService,
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
    fixture = TestBed.createComponent(ArtistaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
