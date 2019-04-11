import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { ConcursoListComponent } from './concurso-list.component';
import { Concurso } from '../concurso';
import { ConcursoService } from '../concurso.service';
import { AppModule } from '../../app.module';
import { AppRoutingModule } from '../../app-routing/app-routing.module';

describe('ConcursoListComponent', () => {
    let component: ConcursoListComponent;
    let fixture: ComponentFixture<ConcursoListComponent>;
    const concursos: Concurso[] = require('../../../assets/concursos.json');

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [AppRoutingModule, HttpClientModule, AppModule],
          declarations: [ ConcursoListComponent ],
          providers: [{provide: APP_BASE_HREF, useValue: ''}, ConcursoService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
