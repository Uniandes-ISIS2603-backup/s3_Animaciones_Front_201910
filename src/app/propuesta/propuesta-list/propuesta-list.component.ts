import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Propuesta} from '../propuesta';
import {PropuestaService} from '../propuesta.service';

@Component({
  selector: 'app-propuesta-list',
  templateUrl: './propuesta-list.component.html',
  styleUrls: ['./propuesta-list.component.css']
})
export class PropuestaListComponent implements OnInit {

  @Input() propuestas: Propuesta[];

  constructor(private service: PropuestaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPropuestas();
  }

  getPropuestas(): void{
    this.service.getPropuestas().subscribe(sapos =>{
      this.propuestas = sapos;
    });
  }

}