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
    
  /**
   * La lsta de propuestas a desplegarse
   */  
  @Input() propuestas: Propuesta[];

    /**
     * Método constructor de la clase
     * @param service Servicio que lista las propuestas
     * @param route Ruta a utilizarse
     */
  constructor(private service: PropuestaService, private route: ActivatedRoute) { }
    
  /**
   * Método que se ejecuta al instanciar el componente
   */
  ngOnInit() {
    this.getPropuestas();
  }

    /**
     * Método que trae las propuestas
     */
  getPropuestas(): void{
    this.service.getPropuestas().subscribe(sapos =>{
      this.propuestas = sapos;
    });
  }

}