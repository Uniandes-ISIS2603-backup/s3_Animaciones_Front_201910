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

rondas: Ronda[];
Rondas_id: number;
selectedRonda: Ronda;

getRondas(): void {
    this.RondasService.getRondas().subscribe(Rondas => this.rondas = Rondas);
  }

  onSelected(Rondas_id: number): void {
    this.Rondas_id = Rondas_id;
    this.selectedRonda = new Ronda();
    this.RondasService.getRondaDetail(Rondas_id).subscribe(o => this.selectedRonda = o);
  }



  ngOnInit() {
    this.getRondas();
  }

}