import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import { AnimacionDetailComponent } from './animacion-detail.component';
import { AppModule } from '../../app.module';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { AnimacionService } from '../animacion.service';
import { Animacion } from '../animacion';

describe('AnimacionDetailComponent', () => {
  let component: AnimacionDetailComponent;
  let fixture: ComponentFixture<AnimacionDetailComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [AppRoutingModule, HttpClientModule, AppModule],
          declarations: [ AnimacionDetailComponent ],
          providers: [
              {
                  provide: APP_BASE_HREF,
                  useValue: ''
              },
              AnimacionService,
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
    fixture = TestBed.createComponent(AnimacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
