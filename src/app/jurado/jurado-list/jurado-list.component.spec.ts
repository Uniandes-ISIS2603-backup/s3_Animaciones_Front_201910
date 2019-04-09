import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http'

import { JuradoListComponent } from './jurado-list.component';
import { Jurado } from '../jurado';
import { JuradoService } from '../jurado.service';
import { AppModule } from '../../app.module';
import { AppRoutingModule } from '../../app-routing/app-routing.module';

describe('JuradoListComponent', () => {
  let component: JuradoListComponent;
  let fixture: ComponentFixture<JuradoListComponent>;
  const jurados: Jurado[] = require('../../../assets/artistas.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          imports: [AppRoutingModule, HttpClientModule, AppModule],
          declarations: [ JuradoListComponent ],
          providers: [{provide: APP_BASE_HREF, useValue: ''}, JuradoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
