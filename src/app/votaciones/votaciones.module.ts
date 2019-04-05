import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [ListComponent, DetailComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule
  ]
})
export class VotacionesModule { }
