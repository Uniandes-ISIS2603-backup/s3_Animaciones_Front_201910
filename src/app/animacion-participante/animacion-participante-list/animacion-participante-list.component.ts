import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { AnimacionParticipante } from '../animacion-participante';
import { AnimacionParticipanteService } from '../animacion-participante.service';

@Component({
  selector: 'app-animacion-participante-list',
  templateUrl: './animacion-participante-list.component.html',
  styleUrls: ['./animacion-participante-list.component.css']
})
export class AnimacionParticipanteListComponent implements OnInit {

    constructor(private animacionParticipanteService: AnimacionParticipanteService, private route: ActivatedRoute) { }

    @Input() animacionesParticipantes: AnimacionParticipante[];

    showCreate: boolean;

    all: string = 'no';

    getAnimaciones(): void {
        this.animacionParticipanteService.getAnimacionesParticipantes().subscribe(animacionesP => {
            this.animacionesParticipantes = animacionesP;
        });
    }

    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

    ngOnInit() {
        this.showCreate = false;
        this.route.queryParams.filter(params => params.all).subscribe(params => {
            this.all = params.all;
        });
        if(this.all == 'yes'){
            this.getAnimaciones();
        }
    }
}
