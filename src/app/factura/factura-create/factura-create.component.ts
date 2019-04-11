import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {FacturaService} from '../factura.service';
import {Factura} from '../factura';

@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css']
})
export class FacturaCreateComponent implements OnInit {
  /**
   * Representa la factura que se va a crear
   */
  factura: Factura;
    
  /**
   * Método constructor de la clase
   * @param service Servicio que crea la factura
   * @param router ???
   * @param toastrService servicio que despliega errores
   */
  constructor(private service: FacturaService, private router: Router, private toastrService: ToastrService) { }
    
  /**
   * Método que se ejecuta al instanciar el componente
   */
  ngOnInit() {
    this.factura = new Factura();
  }
    
  /**
   * Método que se da cuando se cancela la creación
   */
  cancelCreation(): void {
        this.toastrService.warning('No se creó la Factura', 'Crear factura');
        this.router.navigate(['/propuestas']);
  }
    
  /**
   * Método que crea la factura
   * @return la factura nueva
   */
  crearFactura(): Factura{
    this.service.createFactura(this.factura).subscribe(yo => {
                this.factura.id = yo.id;
            }, err => {
                this.toastrService.error(err, 'Error');
    });
    return this.factura;
  }

}