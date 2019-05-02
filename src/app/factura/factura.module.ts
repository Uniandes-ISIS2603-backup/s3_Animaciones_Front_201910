import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import {BrowserModule} from '@angular/platform-browser';
import { FacturaCreateComponent } from './factura-create/factura-create.component';
import { FacturaService } from './factura.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, BrowserModule, HttpClientModule, RouterModule,AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [FacturaDetailComponent, FacturaCreateComponent],
  providers: [ FacturaService],
  exports: [FacturaCreateComponent, FacturaDetailComponent]
})
export class FacturaModule { }