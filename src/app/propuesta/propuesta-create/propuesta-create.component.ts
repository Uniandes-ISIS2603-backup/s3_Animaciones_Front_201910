import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {PropuestaService} from '../propuesta.service';
import {Propuesta} from '../propuesta';


@Component({
  selector: 'app-propuesta-create',
  templateUrl: './propuesta-create.component.html',
  styleUrls: ['./propuesta-create.component.css']
})
export class PropuestaCreateComponent implements OnInit {
    /**
     * Representa la propuesta que se va a crear
     */
  propuesta: Propuesta;

    /**
     * Método constructor
     * @param service El servicio que crea la propuesta
     * @param router ???
     * @param toastrService El manejador y desplegador de errores
     */
  constructor(private service: PropuestaService, private router: Router, private toastrService: ToastrService) { }

    /**
     * Método que se da si se cancela la creacióm
     */
  cancelCreation(): void {
        this.toastrService.warning('No se creó la Propuesta', 'Crear propuesta');
       // this.router.navigate(['/propuestas']);
  }

    /**
     * Método que crea la propuesta
     */
  crearPropuesta(): Propuesta{
    this.service.createPropuesta(this.propuesta).subscribe(yo => {
                this.propuesta.id = yo.id;
                this.router.navigate(['/propuestas/' + yo.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
    });
    return this.propuesta;
  }

    /**
     * Método que se da cuando se instancia la clase
     */
  ngOnInit() {
    this.propuesta = new Propuesta();
  }

}