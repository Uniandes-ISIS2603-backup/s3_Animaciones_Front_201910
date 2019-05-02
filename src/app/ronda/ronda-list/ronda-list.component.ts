/*
 * archivo que representa el caso de uso de listar una ronda
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ronda } from '../ronda';
import { RondaService} from '../ronda.service';


@Component({
  selector: 'app-ronda-list',
  templateUrl: './ronda-list.component.html',
  styleUrls: ['./ronda-list.component.css']
})
export class RondaListComponent implements OnInit {

constructor(private RondasService: RondaService, private router: Router) { }
/*
 * arreglo de rondas a listar
 */
rondas: Ronda[];
/*
 * id de la ronda seleccionada
 */
Rondas_id: number;
/*
 * ronda seleccionada
 */
selectedRonda: Ronda;
/*
 * función asincrona que obtiene la lista de las rondas
 */
getRondas(): void {
    this.RondasService.getRondas().subscribe(Rondas => this.rondas = Rondas);
  }
/*
 * función que determina lo que se hace cuando se selecciona una ronda
 */
  onSelected(Rondas_id: number): void {
    this.Rondas_id = Rondas_id;
    this.selectedRonda = new Ronda();
    this.RondasService.getRondaDetail(Rondas_id).subscribe(o => this.selectedRonda = o);
  }
/*
 * función que se llama al inicializar el componente
 */
  ngOnInit() {
    this.getRondas();
  }

}