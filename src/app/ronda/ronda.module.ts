/*
 * archivo que representa el modulo de la ronda
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RondaService } from './ronda.service';
import { RondaListComponent } from './ronda-list/ronda-list.component';
import { RondaDetailComponent } from './ronda-detail/ronda-detail.component';
import { RondaCreateComponent } from './ronda-create/ronda-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { VotacionModule } from '../votacion/votacion.module';


@NgModule({
  declarations: [RondaListComponent, RondaDetailComponent, RondaCreateComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    VotacionModule
  ],
  providers: [RondaService],
  exports: [RondaListComponent]
})
export class RondaModule { }
