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

  constructor(private rondaService: RondaService,
    private route: ActivatedRoute) { 
  }
@Input() rondaD: RondaDetail
rondas_id : number;


  ngOnInit() {
    this.rondas_id = +this.route.snapshot.paramMap.get('id');
    if (this.rondas_id) {
      this.rondaD = new RondaDetail();
      this.getRondaDetail();
      console.log(this.rondaD);
    }
  }

  getRondaDetail(): void {
    this.rondaService.getRondaDetail(this.rondas_id)
      .subscribe(ronda => {
        this.rondaD= ronda
      });
  }
  totalPuntos() : number{
    var total  = 0;
    for(let e of  this.rondaD.votaciones )
    {
      total += e.puntos;
    }
    return total;
    
  }
}
