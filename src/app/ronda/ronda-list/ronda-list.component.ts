import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Ronda } from '../ronda';
import { RondaService } from '../ronda.service';
@Component({
  selector: 'app-ronda-list',
  templateUrl: './ronda-list.component.html',
  styleUrls: ['./ronda-list.component.css']
})
export class RondaListComponent implements OnInit {

  constructor(private rondaService: RondaService) { }
  rondas: Ronda[]
  getRondas(): void {
    this.rondaService.getRondas().subscribe(rondas => {
        this.rondas = rondas;
    });
}

  ngOnInit() {
    this.getRondas();
  }

}
