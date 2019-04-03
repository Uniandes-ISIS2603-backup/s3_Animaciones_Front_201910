import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AnimacionListComponent } from './animacion-list/animacion-list.component';
import { AnimacionService } from './animacion.service';
import { AnimacionDetailComponent } from './animacion-detail/animacion-detail.component';
import { AnimacionCreateComponent } from './animacion-create/animacion-create.component';

@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      NgbModule
  ],
    declarations: [AnimacionListComponent, AnimacionDetailComponent, AnimacionCreateComponent],
    providers: [AnimacionService],
    exports: [AnimacionListComponent]
})
export class AnimacionModule { }
