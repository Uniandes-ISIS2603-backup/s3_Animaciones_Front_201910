import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

import { AnimacionParticipanteListComponent } from './animacion-participante-list/animacion-participante-list.component';
import { AnimacionParticipanteService } from './animacion-participante.service';
import { AnimacionParticipanteCreateComponent } from './animacion-participante-create/animacion-participante-create.component';
import { AnimacionParticipanteEditComponent } from './animacion-participante-edit/animacion-participante-edit.component';
import { VotacionModule } from '../votacion/votacion.module';

@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      NgbModule,
      VotacionModule,
      NgxPermissionsModule
  ],
    declarations: [AnimacionParticipanteListComponent, AnimacionParticipanteCreateComponent, AnimacionParticipanteEditComponent],
    providers: [AnimacionParticipanteService],
    exports: [AnimacionParticipanteListComponent]
})
export class AnimacionParticipanteModule { }
