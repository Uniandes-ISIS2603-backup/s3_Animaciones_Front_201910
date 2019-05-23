import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ConcursoService} from '../concurso.service';
import {Concurso} from '../concurso';

@Component({
  selector: 'app-concurso-create',
  templateUrl: './concurso-create.component.html',
    styleUrls: ['./concurso-create.component.css']
})
export class ConcursoCreateComponent implements OnInit {

    constructor(private concursoService: ConcursoService, private toastService: ToastrService) { }

    concurso: Concurso;
    tecnicas: String[];
    
    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    createConcurso(): Concurso {
        this.concursoService.createConcurso(this.concurso).subscribe((concurso) => {
            this.concurso = concurso;
            this.create.emit();
            this.toastService.success("El concurso fue creado","Creacion concurso");
        }, err => {
            this.toastService.error(err,"Error");
        });
        return this.concurso;
    }

    cancelCreation(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.concurso = new Concurso();
        this.tecnicas = ['Libre', 'Animacion Completa', 'Animacion Limitada', 'live-Action', 'Claymotion', 'Pixelation', 'Go-Motion', 'Con Recortes', 'Flash', 'Captura de Movimiento', 'Modelado 3D', 'Animacion con Arena', 'Pinscreen'];
   
  }

}
