import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MedioDePago} from "../medio-pago";
import {MedioDePagoService} from "../medio-de-pago.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  /**
   * Atributo que contiene el id que es creado en el back
   */
  id = 0;

  /**
   * Jurado que tiene el detail del jurado actual
   */
  edit :MedioDePago ;

  /**
   * El atributo que modela el booleano de lazy carga
   */
  showCreate: boolean;

  /**
   * Constructor que incializa el service de  jurado
   * Constructor que incializa el route con el Id
   */
  constructor(private medioService :MedioDePagoService,
              private activateRoute :ActivatedRoute) { this.id = activateRoute.snapshot.params['id']}

  /**
   * Metodo que genera la solicitu de detail del jurado pedido
   */
  getMedio(): void {
    this.medioService.getMediosdePago().subscribe(jurados => {
      jurados.forEach(j => {
        if(j.id == this.id){
          this.edit =j;
        }
      });

    });
  }

  /**
   * Metodo que hace la carga perezosa
   */
  showHideCreate(): void {
    this.showCreate = !this.showCreate!
  }
  ngOnInit() {
    this.getMedio();
  }
}
