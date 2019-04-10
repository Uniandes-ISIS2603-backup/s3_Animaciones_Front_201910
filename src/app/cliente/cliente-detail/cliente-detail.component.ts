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

  @Input() cliente: Cliente;

    constructor(private route: ActivatedRoute, private clienteService: ClienteService) { }

    cliente_id: number;

    showEdit: boolean;

    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id).subscribe(cliente => {
            this.cliente = cliente
        });
    }

    showHideEdit(): void {
        this.showEdit = !this.showEdit!
    }

    ngOnInit() {
        this.showEdit = false;
        this.cliente_id = +this.route.snapshot.paramMap.get('id');
        if(this.cliente_id){
            this.cliente = new Cliente();
            this.getClienteDetail();
        }
  }

}
