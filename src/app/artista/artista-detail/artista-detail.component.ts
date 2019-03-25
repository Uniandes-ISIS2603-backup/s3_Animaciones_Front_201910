import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtistaService } from '../artista.service';

import { ArtistaDetail } from '../artista-detail';
import { Artista } from '../artista';

@Component({
  selector: 'app-artista-detail',
  templateUrl: './artista-detail.component.html',
  styleUrls: ['./artista-detail.component.css']
})
export class ArtistaDetailComponent implements OnInit {

    @Input() artistaDetail: ArtistaDetail;

    constructor(private route: ActivatedRoute, private artistaService: ArtistaService) { }

    artista_id: number;

    getArtistaDetail(): void {
        this.artistaService.getArtistaDetail(this.artista_id).subscribe(artistaDetail => {
            this.artistaDetail = artistaDetail
        });
    }

    ngOnInit() {
        this.artista_id = +this.route.snapshot.paramMap.get('id');
        if(this.artista_id){
            this.artistaDetail = new ArtistaDetail();
            this.getArtistaDetail();
        }
  }

}
