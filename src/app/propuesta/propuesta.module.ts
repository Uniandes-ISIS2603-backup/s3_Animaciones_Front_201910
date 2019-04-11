import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { PropuestaService } from './propuesta.service';
import { PropuestaListComponent } from './propuesta-list/propuesta-list.component';
import { PropuestaDetailComponent } from './propuesta-detail/propuesta-detail.component';
import { PropuestaCreateComponent } from './propuesta-create/propuesta-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, BrowserModule,  HttpClientModule, RouterModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [PropuestaListComponent, PropuestaDetailComponent, PropuestaCreateComponent],
  providers: [PropuestaService],
  exports: [PropuestaListComponent, PropuestaDetailComponent, PropuestaCreateComponent]
})
export class PropuestaModule { }