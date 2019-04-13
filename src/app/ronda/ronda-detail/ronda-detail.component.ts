/*
 * archivo que representa el caso de uso de mostrar el detalle de una ronda
 */
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RondaService } from '../ronda.service';
import { Ronda } from '../ronda';
import { RondaDetail } from '../ronda-detail';
import {Votacion} from '../../votacion/votacion'
@Component({
  selector: 'app-ronda-detail',
  templateUrl: './ronda-detail.component.html',
  styleUrls: ['./ronda-detail.component.css']
})
export class RondaDetailComponent implements OnInit {
/*
 * constructor
 */
  constructor(private rondaService: RondaService,
    private route: ActivatedRoute) { 
  }
  /*
 * la ronda Detail que se crea al seleccionar la rond
 */
@Input() rondaD: RondaDetail
/*
 * el id de esa ronda
 */
rondas_id : number;

/*
 * función que se llama al inicializar el componente
 */
  ngOnInit() {
    this.rondas_id = +this.route.snapshot.paramMap.get('id');
    if (this.rondas_id) {
      this.rondaD = new RondaDetail();
      this.getRondaDetail();
      console.log(this.rondaD);
    }
  }
/*
 * función asincrona para obtener el detalle de una ronda
 */
  getRondaDetail(): void {
    this.rondaService.getRondaDetail(this.rondas_id)
      .subscribe(ronda => {
        this.rondaD= ronda
      });
  }
  /*
 * función para calcular el total de puntos de una ronda
 */
  totalPuntos() : number{
    var total  = 0;
    for(let e of  this.rondaD.votaciones )
    {
      total += e.puntos;
    }
    return total;
    
  }
}
