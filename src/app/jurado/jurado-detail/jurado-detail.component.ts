import { ActivatedRoute } from '@angular/router';
import { JuradoService } from './../jurado.service';
import { Component, OnInit } from '@angular/core';
import { Jurado } from '../jurado';

@Component({
  selector: 'app-jurado-detail',
  templateUrl: './jurado-detail.component.html',
  styleUrls: ['./jurado-detail.component.css']
})

/**
 * Clase del detail de jurado
 */
export class JuradoDetailComponent implements OnInit {

  /**
   * Atributo que contiene el id que es creado en el back
   */
  id = 0;

  /**
   * Jurado que tiene el detail del jurado actual 
   */
  jurado :Jurado ;

  /**
   * El atributo que modela el booleano de lazy carga
   */
  showCreate: boolean;

  /**
   * Constructor que incializa el service de  jurado
   * Constructor que incializa el route con el Id
   */
  constructor(private juradoService :JuradoService,
     private activateRoute :ActivatedRoute) { this.id = activateRoute.snapshot.params['id']}

  /**
   * Metodo que genera la solicitu de detail del jurado pedido
   */
  getJurado(): void {
    this.juradoService.getJurados().subscribe(jurados => {
      jurados.forEach(j => {
        if(j.id == this.id){
          this.jurado =j;
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
  this.getJurado();
}

}
