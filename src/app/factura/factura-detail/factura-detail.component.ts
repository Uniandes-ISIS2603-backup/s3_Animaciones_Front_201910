import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import {Factura} from '../factura';
import {FacturaService} from '../factura.service';
import {DataService} from '../../data.service';
import {PropuestaService} from '../../propuesta/propuesta.service';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit, OnDestroy {
  /**
   * Identificador de la factura
   */
  id: number;

  /**
   * La factura a desplegarse
   */
  factura: Factura;

  /**
   * La suscripción a la navegación
   */
  navigationSubscription;

  /**
   * Método constructor del componente.
   * @param route Ruta que se va a utilizar
   * @param service servicio para hacer funcionar el componente
   * @param router ???
   */
  constructor(private route: ActivatedRoute, private service: FacturaService, private ps: PropuestaService, private router: Router, private data: DataService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
      });
   }

  /**
   * Invoca al servicio para traer la factura
   */
  getFacturaDetail(): void{
    this.service.getFactura(this.id).subscribe(sapo =>{this.factura = sapo});
  }
  
  /**
   * Método que se ejecuta al invocar al componente
   */
  ngOnInit() {
    this.data.currentMessage.subscribe(sapo=>{this.id = sapo});
    this.factura = new Factura();
    this.getFacturaDetail();
  }

  /**
   * Método que se ejecuta para destruir lo creado por el anterior
   */
  ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
}

}