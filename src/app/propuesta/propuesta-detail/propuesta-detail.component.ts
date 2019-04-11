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

  id: number;

  idFactura: number;

  propuesta: Propuesta;

  navigationSubscription;

  constructor(private route: ActivatedRoute, private service: PropuestaService, private router: Router, private data: DataService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
      });
   }

  getPropuestaDetail(): void{
    this.service.getPropuestaDetail(this.id).subscribe(sapon => {this.propuesta = sapon});
  }

  getFacturaId(): void{
    this.data.currentMessage.subscribe(sapin =>{this.idFactura=sapin});
  }

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

  ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
}

}