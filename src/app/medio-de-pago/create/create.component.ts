import { MedioDePagoService } from './../medio-de-pago.service';
import { MedioDePago } from './../medio-pago';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  medioDePago :MedioDePago;
  formasdePago : string [];

  constructor (private medioPagoService : MedioDePagoService) { }

  ngOnInit() {
    this.medioDePago = new MedioDePago (); 
    this.formasdePago = ['DEBITO' , 'CREDITO', 'PAYPAL', 'PSE'];
  }
  
  registrar (){
    this.medioPagoService.createMedioDePago(this.medioDePago).subscribe((rs)=>{console.log('http medioDepago', rs)})
     console.log (this.medioDePago)
  }

}
