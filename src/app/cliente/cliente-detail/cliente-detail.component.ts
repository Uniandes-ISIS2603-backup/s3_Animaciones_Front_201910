import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClienteService } from '../cliente.service';


import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

    id = 0;

    cliente :Cliente ;
  
    showCreate: boolean;
  
    constructor(private clienteService :ClienteService,
       private activateRoute :ActivatedRoute) { this.id = activateRoute.snapshot.params['id']}
  
    
    getJurado(): void {
      this.clienteService.getClientes().subscribe(clientes => {
        clientes.forEach(clientes => {
          if(clientes.id == this.id){
            this.cliente =clientes;
          }
        });
  
      });
  }
  
  showHideCreate(): void {
    this.showCreate = !this.showCreate!
  }
  
  ngOnInit() {
    this.getJurado();
  }
  
}
