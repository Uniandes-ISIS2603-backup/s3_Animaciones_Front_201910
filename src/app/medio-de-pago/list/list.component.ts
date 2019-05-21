import { Component, OnInit } from '@angular/core';
import {MedioDePagoService} from "../medio-de-pago.service";
import {Jurado} from "../../jurado/jurado";
import {MedioDePago} from "../medio-pago";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private  service:MedioDePagoService) {}
  //Atributo que contiene todos los medios en una lista
  mediosPago : MedioDePago[];

  //Atributo que me permite controlar la visualizacion
  showCreate: boolean;

  //Metodo que permite obtener todos los medios
  getMediosPago(): void {
    this.service.getMediosdePago().subscribe(jurados => {
      this.mediosPago = jurados;
    });
  }

  //Metodo que me permite utilizar el atributo showCreate
  showHideCreate(): void {
    this.showCreate = !this.showCreate!
  }


  ngOnInit() {
    this.showCreate = false;
    this.getMediosPago();
  }
}
