import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [ListComponent, CreateComponent, DetailComponent, UpdateComponent],
  imports: [
    CommonModule
  ]
})
export class RondasModule { }
