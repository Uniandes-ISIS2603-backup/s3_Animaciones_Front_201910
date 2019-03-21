import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Artista } from '../artista';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {

    constructor(private artistaService: ArtistaService) { }

    artistas: Artista[];

    getArtistas(): void {
        this.artistaService.getArtistas().subscribe(artistas => {
            this.artistas = artistas;
        });
    }

    ngOnInit() {
        this.getArtistas();
    }

}
