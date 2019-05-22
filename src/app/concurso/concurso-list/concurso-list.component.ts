import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Concurso } from '../concurso';
import { ConcursoService } from '../concurso.service';

@Component({
  selector: 'app-concurso-list',
  templateUrl: './concurso-list.component.html',
  styleUrls: ['./concurso-list.component.css']
})
export class ConcursoListComponent implements OnInit {

    constructor(private concursoService: ConcursoService) { }

 
  
    concursos: Concurso[];
    showCreate: boolean;

    getConcursos(): void {
    this.concursoService.getConcursos().subscribe(concursos => {this.concursos = concursos});
     }


    showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }
    
    ngOnInit() {
        this.showCreate = false;
        this.getConcursos();
    }

}
