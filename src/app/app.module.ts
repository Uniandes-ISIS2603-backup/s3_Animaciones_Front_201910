import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import {DataService} from './data.service';

import {ArtistaModule} from './artista/artista.module';
import {AnimacionModule} from './animacion/animacion.module';
import {RondaModule} from './ronda/ronda.module';
import {VotacionModule} from './votacion/votacion.module';
import { JuradoModule } from './jurado/jurado.module';
import { ClienteModule } from './cliente/cliente.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import {PropuestaModule} from './propuesta/propuesta.module';
import {FacturaModule} from './factura/factura.module';
import {AnimacionParticipanteModule} from './animacion-participante/animacion-participante.module';

import { MedioDePagoModule } from './medio-de-pago/medio-de-pago.module';

import {ConcursoModule} from './concurso/concurso.module';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        ArtistaModule,
        AnimacionModule,
        ClienteModule,
        CalificacionModule,
        RondaModule,
        VotacionModule,
        ConcursoModule,
        JuradoModule,
        MedioDePagoModule,
        PropuestaModule,
        FacturaModule,
        AnimacionParticipanteModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }, DataService
    ]
})
export class AppModule {}
