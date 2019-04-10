import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaliificacionListComponent } from './caliificacion-list/caliificacion-list.component';
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CaliificacionListComponent, CalificacionDetailComponent]
})
export class CalificacionModule { }
