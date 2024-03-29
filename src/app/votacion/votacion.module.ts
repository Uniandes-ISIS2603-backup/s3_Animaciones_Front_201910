
/*
 * archivo que representa el modulo de votacion
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { VotacionService } from './votacion.service';
import { VotacionListComponent } from './votacion-list/votacion-list.component';
import { VotacionCreateComponent } from './votacion-create/votacion-create.component';

@NgModule({
  declarations: [VotacionListComponent, VotacionCreateComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [VotacionService],
  exports: [VotacionListComponent, VotacionCreateComponent]
})
export class VotacionModule { }
