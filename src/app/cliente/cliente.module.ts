import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {ClienteService} from './cliente.service';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';


@NgModule({
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      CommonModule,
      NgxPermissionsModule,
      FormsModule,
  
      NgbModule
  ],
      declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent]
})
export class ClienteModule { }
