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

  factura: Factura;

  constructor(private service: FacturaService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.factura = new Factura();
  }

  cancelCreation(): void {
        this.toastrService.warning('No se creó la Factura', 'Crear factura');
        this.router.navigate(['/propuestas']);
  }

  crearFactura(): Factura{
    this.service.createFactura(this.factura).subscribe(yo => {
                this.factura.id = yo.id;
            }, err => {
                this.toastrService.error(err, 'Error');
    });
    return this.factura;
  }

}