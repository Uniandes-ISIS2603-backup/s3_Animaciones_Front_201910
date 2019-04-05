import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RondaListComponent } from './ronda-list/ronda-list.component';
import { RondaDetailComponent } from './ronda-detail/ronda-detail.component';
import { RondaCreateComponent } from './ronda-create/ronda-create.component';

@NgModule({
  declarations: [RondaListComponent, RondaDetailComponent, RondaCreateComponent],
  imports: [
    CommonModule
  ]
})
export class RondaModule { }
