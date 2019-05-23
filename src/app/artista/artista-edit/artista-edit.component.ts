import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ArtistaService} from '../artista.service';
import {ArtistaDetail} from '../artista-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-artista-edit',
  templateUrl: './artista-edit.component.html',
  styleUrls: ['./artista-edit.component.css']
})
export class ArtistaEditComponent implements OnInit, OnChanges {

    constructor(private artistaService: ArtistaService, private toastService: ToastrService, private route: ActivatedRoute) { }

    @Input() artista: ArtistaDetail;
    artista_id: number;

    @Output() cancel = new EventEmitter();

    @Output() update = new EventEmitter();

    editArtista(): void {
        this.artistaService.updateArtista(this.artista).subscribe(() => {
            this.toastService.success("La informacion del artista fue actualizada", "Artista Edit");
        });
        this.update.emit();
    }

    cancelEdition(): void {
        this.cancel.emit();
    }

    getArtistaDetail(): void {
        this.artistaService.getArtistaDetail(this.artista_id).subscribe(artistaDetail => {
            this.artista = artistaDetail;
            this.artista.animaciones = artistaDetail.animaciones;
        });
    }

    ngOnInit() {
        this.artista_id = +this.route.snapshot.paramMap.get('id');
        if(this.artista_id){
            this.artista = new ArtistaDetail();
            this.getArtistaDetail();
        }
    }

    ngOnChanges(){
        this.ngOnInit()
    }

}
