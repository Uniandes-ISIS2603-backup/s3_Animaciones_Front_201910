import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotacionListComponent } from './votacion-list/votacion-list.component';
import { VotacionDetailComponent } from './votacion-detail/votacion-detail.component';
import { VotacionCreateComponent } from './votacion-create/votacion-create.component';

@NgModule({
  declarations: [VotacionListComponent, VotacionDetailComponent, VotacionCreateComponent],
  imports: [
    CommonModule
  ]
})
export class VotacionModule { }
