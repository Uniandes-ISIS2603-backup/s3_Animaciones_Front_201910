import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';

import { ConcursoListComponent } from './concurso-list/concurso-list.component';
import { ConcursoService } from './concurso.service';
import { ConcursoDetailComponent } from './concurso-detail/concurso-detail.component';
import { ConcursoCreateComponent } from './concurso-create/concurso-create.component';
import {ConcursoEditComponent} from './concurso-edit/concurso-edit.component';
import { RondaModule } from '../ronda/ronda.module';


@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      AnimacionParticipanteModule,
      FormsModule,
      RondaModule,
      NgxPermissionsModule
  ],
    declarations: [ConcursoListComponent, ConcursoDetailComponent, ConcursoCreateComponent, ConcursoEditComponent],
    providers: [ConcursoService],
    exports: [ConcursoListComponent]
})
export class ConcursoModule { }
