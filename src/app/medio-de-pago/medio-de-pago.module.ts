import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import {MedioDePagoService} from "./medio-de-pago.service";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule, 
    FormsModule
  ],
  declarations: [CreateComponent, ListComponent, EditComponent],
  providers:[MedioDePagoService]
})
export class MedioDePagoModule { }
