import { JuradoService } from './jurado.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuradoListComponent } from './jurado-list/jurado-list.component';
import { JuradoCreateComponent } from './jurado-create/jurado-create.component';
import { JuradoDetailComponent } from './jurado-detail/jurado-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers:[JuradoService],
  declarations: [JuradoListComponent, JuradoCreateComponent, JuradoDetailComponent]
})
export class JuradoModule { }
