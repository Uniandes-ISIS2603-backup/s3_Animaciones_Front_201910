import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import { AnimacionListComponent } from './animacion-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {AnimacionService} from '../animacion.service';
import {Animacion} from '../animacion';

describe('AnimacionListComponent', () => {
  let component: AnimacionListComponent;
    let fixture: ComponentFixture<AnimacionListComponent>;
    const animaciones: Animacion[] = require('../../../assets/animaciones.json');

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [AppRoutingModule, HttpClientModule, AppModule],
          declarations: [ AnimacionListComponent ],
          providers: [{provide:  APP_BASE_HREF, useValue: ''}, AnimacionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
