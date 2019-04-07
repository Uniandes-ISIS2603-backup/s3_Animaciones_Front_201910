import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { ArtistaListComponent } from './artista-list/artista-list.component';
import { ArtistaService } from './artista.service';
import { ArtistaDetailComponent } from './artista-detail/artista-detail.component';

import { AnimacionModule } from '../animacion/animacion.module';
import { ArtistaCreateComponent } from './artista-create/artista-create.component';
import { ArtistaEditComponent } from './artista-edit/artista-edit.component';

@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      AnimacionModule
  ],
    declarations: [ArtistaListComponent, ArtistaDetailComponent, ArtistaCreateComponent, ArtistaEditComponent],
    providers: [ArtistaService],
    exports: [ArtistaListComponent]
})
export class ArtistaModule { }
