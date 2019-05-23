import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
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
  
  constructor(private clienteService: ClienteService,   private toastService: ToastrService) { }
  @Output() cancel = new EventEmitter();

  @Output() create = new EventEmitter();

 

createCliente(): Cliente {
  
  this.clienteService.createCliente(this.cliente).subscribe((cliente) => {
      this.cliente = cliente;
      this.create.emit();
      this.toastService.success("El cliente ha sido creado", "Creacion de un Cliente");
    }, err => {
      this.toastService.error(err,"Error");
  });
  return this.cliente;
}



showHideCreate(): void {
  this.showCreate = !this.showCreate!
}
cancelCreation(): void {
  this.cancel.emit();
}

  ngOnInit() {
    this.showCreate = false;
  
  
    this.cliente = new Cliente ();
  }

  registrar(): void{
     
    console.log('id cliente', this.cliente);
  }
}
