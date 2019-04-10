import { Component, OnInit } from '@angular/core';

import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

 
  clientes : Cliente[];
  showCreate: boolean;
  cliente_id: any;
  cliente : Cliente;
  
  constructor(private clienteService: ClienteService) { }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientes => {
        this.clientes = clientes;
        console.table(this.clientes);
    });
}

showHideCreate(): void {
  this.showCreate = !this.showCreate!
}

  ngOnInit() {
    this.showCreate = false;
    this.getClientes();
    this.cliente = new Cliente ();
  }

  registrar(): void{
     
    console.log('id cliente', this.cliente);
  }
}
