import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {PropuestaService} from '../propuesta.service';
import {Propuesta} from '../propuesta';
import {Factura} from '../../factura/factura';


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
     * La factura que se va a asociar a la propuesta
     */
  factura: Factura;
    /**
     * el id de la animación a comprar
     */
  id:number

    /**
     * Método constructor
     * @param service El servicio que crea la propuesta
     * @param router ???
     * @param toastrService El manejador y desplegador de errores
     */
  constructor(private service: PropuestaService, private router: Router, private toastrService: ToastrService, private route: ActivatedRoute) { }

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
                this.router.navigate(['/animaciones']);
            }, err => {
                this.toastrService.error(err, 'Error');
    });
      this.factura.idAnim = this.id;
      this.service.updatePropuesta(this.factura, this.id).subscribe(usted=>{
                this.factura.id = usted.factura.id;
    })
    return this.propuesta;
  }

    /**
     * Método que se da cuando se instancia la clase
     */
  ngOnInit() {
    this.propuesta = new Propuesta();
      this.id = + this.route.parent.snapshot.paramMap.get('id');
      this.factura = new Factura();
  }

}