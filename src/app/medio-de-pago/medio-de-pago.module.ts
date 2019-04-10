import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule, 
    FormsModule
  ],
  declarations: [CreateComponent]
})
export class MedioDePagoModule { }
