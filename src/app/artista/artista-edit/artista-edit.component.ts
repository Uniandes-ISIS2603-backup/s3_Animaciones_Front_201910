import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import {ArtistaService} from '../artista.service';
import {ArtistaDetail} from '../artista-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-artista-edit',
  templateUrl: './artista-edit.component.html',
  styleUrls: ['./artista-edit.component.css']
})
export class ArtistaEditComponent implements OnInit, OnChanges {

    constructor(private artistaService: ArtistaService, private toastService: ToastrService) { }

    @Input() artista: ArtistaDetail;

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

  ngOnInit() {
  }

    ngOnChanges(){
        this.ngOnInit()
    }

}
