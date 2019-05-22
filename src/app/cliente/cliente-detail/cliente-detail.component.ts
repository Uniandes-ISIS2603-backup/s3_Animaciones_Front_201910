import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

    id = 0;
  cliente_id: number;
    cliente :Cliente ;
  
    showCreate: boolean;
    showEdit: boolean;
    @Input() clienteDetail: ClienteDetail;

    safeSrc: SafeResourceUrl;

    constructor(private clienteService :ClienteService,
       private activateRoute :ActivatedRoute,  private sanitizer: DomSanitizer) { this.id = activateRoute.snapshot.params['id']}
  
     
    
    getCliente(): void {
      this.clienteService.getClientes().subscribe(clientes => {
        clientes.forEach(clientes => {
          if(clientes.id == this.id){
            this.cliente =clientes;
          }
        });
  
      });
  }
  getClienteDetail(): void {
    this.clienteService.getClienteDetail(this.cliente_id).subscribe(clienteDetail => {
      this.clienteDetail = clienteDetail;
      
  });

   
}
  showHideCreate(): void {
    this.showCreate = !this.showCreate!
  }

  showHideEdit(): void {
    this.showEdit = !this.showEdit!
}
  
  ngOnInit() {
    this.getCliente();
    this.getClienteDetail();
    this.showEdit = false;
    this.cliente_id = +this.activateRoute.snapshot.paramMap.get('id');
    this.clienteDetail = new ClienteDetail();
  }
  
}
