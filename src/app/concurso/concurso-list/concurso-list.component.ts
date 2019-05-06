import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


import { ConcursoService } from '../concurso.service';
import { ConcursoDetail } from '../concurso-detail';
import {JuradoCreateComponent} from '../../jurado/jurado-create/jurado-create.component'
import { Concurso } from '../concurso';

@Component({
  selector: 'app-concurso-list',
  templateUrl: './concurso-list.component.html',
  styleUrls: ['./concurso-list.component.css']
})
export class ConcursoListComponent implements OnInit {

    constructor(private concursoService: ConcursoService, private router: Router) { }

    concurso_id: number;
    selectedConcurso: ConcursoDetail;
  
    concursos: Concurso[];

    getConcursos(): void {
    this.concursoService.getConcursos().subscribe(concursos => this.concursos = concursos);
     }


    onSelected(concurso_id: number): void {
    this.concurso_id = concurso_id;
    this.selectedConcurso = new ConcursoDetail();
    this.concursoService.getConcursoDetail(concurso_id).subscribe(conc => this.selectedConcurso= conc);
  }
    ngOnInit() {
        this.getConcursos();
    }

}
