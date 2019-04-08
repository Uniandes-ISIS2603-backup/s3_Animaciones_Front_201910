import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {AnimacionService} from '../animacion.service';
import {AnimacionDetail} from '../animacion-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-animacion-edit',
  templateUrl: './animacion-edit.component.html',
  styleUrls: ['./animacion-edit.component.css']
})
export class AnimacionEditComponent implements OnInit, OnChanges {

    constructor(private animacionService: AnimacionService, private toastService: ToastrService, private route: ActivatedRoute) { }

    @Input() animacion: AnimacionDetail;
    animacion_id: number;

    @Output() cancel = new EventEmitter();

    @Output() update = new EventEmitter();

    editAnimacion(): void {
        this.animacionService.updateAnimacion(this.animacion).subscribe(() => {
            this.toastService.success("La informacion de la animacion fue actualizada", "Animacion Edit");
        });
        this.update.emit();
    }

    cancelEdition(): void {
        this.cancel.emit();
    }

    getAnimacionDetail(): void {
        this.animacionService.getAnimacionDetail(this.animacion_id).subscribe(animacionDetail => {
            this.animacion = animacionDetail
        });
    }

    ngOnInit() {
        this.animacion_id = +this.route.snapshot.paramMap.get('id');
        if(this.animacion_id){
            this.animacion = new AnimacionDetail();
            this.getAnimacionDetail();
        }
    }

    ngOnChanges() {
        this.ngOnInit()
    }

}
