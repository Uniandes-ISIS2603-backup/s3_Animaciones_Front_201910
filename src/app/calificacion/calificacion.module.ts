import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component';
import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component';
import { CalificacionEditComponent } from './calificacion-edit/calificacion-edit.component';
import {CalificacionService} from './calificacion.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';




@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ CalificacionDetailComponent, CalificacionCreateComponent, CalificacionEditComponent, CalificacionListComponent],
  providers:[CalificacionService],
  exports:[CalificacionListComponent,CalificacionCreateComponent]
})
export class CalificacionModule { }
