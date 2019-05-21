import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {AnimacionParticipanteService} from '../animacion-participante.service';
import {AnimacionParticipante} from '../animacion-participante';
import {Artista} from '../../artista/artista';
import {Ronda} from '../../ronda/ronda';
import {ArtistaService} from '../../artista/artista.service';

@Component({
  selector: 'app-animacion-participante-create',
  templateUrl: './animacion-participante-create.component.html',
    styleUrls: ['./animacion-participante-create.component.css'],
    providers: [DatePipe]
})
export class AnimacionParticipanteCreateComponent implements OnInit {

    constructor(
        private dp: DatePipe,
        private animacionParticipanteService: AnimacionParticipanteService,
        private toastService: ToastrService,
        private artistaService: ArtistaService
        
    ) { }

    animacionParticipante: AnimacionParticipante;

    artista: Artista;

    artistas: Artista[];

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    getArtistas(): void {
        this.artistaService.getArtistas().subscribe(artistas => {
            this.artistas = artistas;
        }, err => {
            this.toastService.error(err, 'Error');
        });
    }



    createAnimacion(): AnimacionParticipante {
        let dateA: Date = new Date(this.animacionParticipante.fecha.year, this.animacionParticipante.fecha.month - 1, this.animacionParticipante.fecha.day);
        this.animacionParticipante.fecha = this.dp.transform(dateA, 'yyyy-MM-ddTHH:mm:ss.SSS');
        this.animacionParticipante.puntaje = 0;
        this.animacionParticipante.puesto = 0;
        this.animacionParticipante.finalista= false;
        this.animacionParticipante.dinero = 0;
        this.animacionParticipanteService.createAnimacion(this.animacionParticipante).subscribe((ani) => {
            this.animacionParticipante = ani;
            this.create.emit();
            this.toastService.success("La animaicon fue inscrita", "Inscripción de Animación");
        });
        return this.animacionParticipante;
    }

    cancelCreation(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.animacionParticipante = new AnimacionParticipante();
        this.animacionParticipante.artista = new Artista();
        this.getArtistas();
  }

}
