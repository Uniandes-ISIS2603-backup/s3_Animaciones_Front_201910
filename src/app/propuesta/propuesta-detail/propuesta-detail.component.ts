import {Component, OnInit, OnDestroy, Input, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import {Propuesta} from '../propuesta';
import {PropuestaService} from '../propuesta.service';
import{FacturaDetailComponent} from '../../factura/factura-detail/factura-detail.component';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-propuesta-detail',
  templateUrl: './propuesta-detail.component.html',
  styleUrls: ['./propuesta-detail.component.css']
})
export class PropuestaDetailComponent implements OnInit, OnDestroy {
    /**
     * ID de la propuesta que se está viendo
     */
  id: number;

    /**
     * id de la factura asociada a la propuesta, si existe
     */
  idFactura: number;
    
  
  /**
   * La propuesta en cuestión
   */
  propuesta: Propuesta;

    /**
     * La suscripción a la navegación
     */
  navigationSubscription;

    /**
     * Método constructor
     * @param route La ruta a utilizar
     * @param service El servicio que trae la propuesta
     * @param router ???
     * @param data El servicio que sincroniza el id de la factura
     */
  constructor(private route: ActivatedRoute, private service: PropuestaService, private router: Router, private data: DataService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
      });
   }

/**
 * mÉTODO QUE TRAe la propuesta detallada
 */
  getPropuestaDetail(): void{
    this.service.getPropuestaDetail(this.id).subscribe(sapon => {this.propuesta = sapon});
  }

    /**
     * Método que debería sincronizar el id de factura
     */
  getFacturaId(): void{
    this.data.currentMessage.subscribe(sapin =>{this.idFactura=sapin});
  }

    /**
     * Método que se ejecuta al instanciar la clase
     */
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.propuesta = new Propuesta();
    this.getPropuestaDetail();
    this.getFacturaId();
    if(this.propuesta.factura!=null){
      this.idFactura = this.propuesta.factura.id;
      this.data.changeMessage(this.idFactura);
    }
    
  }

    /**
     * Método que se ejecuta al destruir la clase
     */
  ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
}

}