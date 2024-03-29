import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConcursoService } from '../concurso.service';
import { ConcursoDetail } from '../concurso-detail';
import { Concurso } from '../concurso';

import {AnimacionParticipanteListComponent} from '../../animacion-participante/animacion-participante-list/animacion-participante-list.component'
import {RondaListComponent} from '../../ronda/ronda-list/ronda-list.component'
import {JuradoListComponent} from '../../jurado/jurado-list/jurado-list.component'

    @Component({
  selector: 'app-concurso-detail',
  templateUrl: './concurso-detail.component.html',
  styleUrls: ['./concurso-detail.component.css']
})
export class ConcursoDetailComponent implements OnInit {

    @Input() concursoDetail: ConcursoDetail;

    constructor(private route: ActivatedRoute, private concursoService: ConcursoService) { }

    concurso_id: number;

    showEdit: boolean;
    
    getConcursoDetail(): void {
        this.concursoService.getConcursoDetail(this.concurso_id).subscribe(concursoDetail => {
            this.concursoDetail = concursoDetail
        });
    }
    
     showHideEdit(): void {
        this.showEdit = !this.showEdit!
    }

    ngOnInit() {
        this.showEdit = false;
        this.concurso_id = +this.route.snapshot.paramMap.get('id');
        if(this.concurso_id){
            this.concursoDetail = new ConcursoDetail();
            this.getConcursoDetail();
        }
  }

}
