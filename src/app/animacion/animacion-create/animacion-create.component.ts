import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {AnimacionService} from '../animacion.service';
import {Animacion} from '../animacion';
import {Artista} from '../../artista/artista';
import {ArtistaService} from '../../artista/artista.service';

@Component({
  selector: 'app-animacion-create',
  templateUrl: './animacion-create.component.html',
    styleUrls: ['./animacion-create.component.css'],
    providers: [DatePipe]
})
export class AnimacionCreateComponent implements OnInit {

    constructor(
        private dp: DatePipe,
        private animacionService: AnimacionService,
        private toastService: ToastrService,
        private artistaService: ArtistaService
    ) { }

    animacion: Animacion;

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

    createAnimacion(): Animacion {
        let dateA: Date = new Date(this.animacion.fecha.year, this.animacion.fecha.month - 1, this.animacion.fecha.day);
        this.animacion.fecha = this.dp.transform(dateA, 'yyyy-MM-ddTHH:mm:ss.SSS');
        this.animacionService.createAnimacion(this.animacion).subscribe((animaicon) => {
            this.animacion = animaicon;
            this.create.emit();
            this.toastService.success("La animaicon fue creada", "Creacion de Animacion");
        });
        return this.animacion;
    }

    cancelCreation(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.animacion = new Animacion();
        this.animacion.artista = new Artista();
        this.getArtistas();
  }

}
