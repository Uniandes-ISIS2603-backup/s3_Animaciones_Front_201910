import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {AnimacionParticipanteService} from '../animacion-participante.service';
import {AnimacionParticipante} from '../animacion-participante';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-animacion-participante-edit',
  templateUrl: './animacion-participante-edit.component.html',
  styleUrls: ['./animacion-participante-edit.component.css']
})
export class AnimacionParticipanteEditComponent implements OnInit, OnChanges {

    constructor(private animacionParticipanteService: AnimacionParticipanteService, private toastService: ToastrService, private route: ActivatedRoute) { }

    @Input() animacionP: AnimacionParticipante;
    animacionP_id: number;

    @Output() cancel = new EventEmitter();

    @Output() update = new EventEmitter();

    editAnimacion(): void {
        this.animacionParticipanteService.updateAnimacion(this.animacionP).subscribe(() => {
            this.toastService.success("La informacion de la animacion fue actualizada", "Animacion participante Edit");
        });
        this.update.emit();
    }

    cancelEdition(): void {
        this.cancel.emit();
    }

    getAnimacionDetail(): void {
        this.animacionParticipanteService.getAnimacionParticipante(this.animacionP_id).subscribe(animaP => {
            this.animacionP = animaP
        });
    }

    ngOnInit() {
        this.animacionP_id = +this.route.snapshot.paramMap.get('id');
        if(this.animacionP_id){
            this.animacionP = new AnimacionParticipante();
            this.getAnimacionDetail();
        }
    }

    ngOnChanges() {
        this.ngOnInit()
    }

}
