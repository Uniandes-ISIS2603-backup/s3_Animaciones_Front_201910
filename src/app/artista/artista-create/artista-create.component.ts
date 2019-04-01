import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ArtistaService} from '../artista.service';
import {Artista} from '../artista';

@Component({
  selector: 'app-artista-create',
  templateUrl: './artista-create.component.html',
    styleUrls: ['./artista-create.component.css']
})
export class ArtistaCreateComponent implements OnInit {

    constructor(private artistaService: ArtistaService, private toastService: ToastrService) { }

    artista: Artista;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    createArtista(): Artista {
        this.artistaService.createArtista(this.artista).subscribe((artista) => {
            this.artista = artista;
            this.create.emit();
            this.toastService.success("El artista fue creado","Creacion de artista");
        }, err => {
            this.toastService.error(err,"Error");
        });
        return this.artista;
    }

    cancelCreation(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.artista = new Artista();
  }

}
