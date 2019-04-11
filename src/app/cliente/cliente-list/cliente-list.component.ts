import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  /**
    * Constructor for the component
    * @param clienteService The cliente's services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private clienteService: ClienteService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}

/**
* The list of authors which belong to the BookStore
*/
clientes: Cliente[];

/**
* The id of the cliente that the user wants to view
*/
cliente_id: number;

/**
* Shows or hides the cliente-create-component
*/
showCreate: boolean;

/**
 * Shows or hides the detail of an cliente
 */
showView: boolean;

/**
* Shows or hides the edition of an cliente
*/
showEdit: boolean;

/**
 * the cliente that the user views.
 */
selectedCliente: Cliente;


/**
* Shows the cliente
*/
onSelected(cliente_id: number): void {
    this.showCreate = false;
    this.showEdit = false;
    this.showView = true;
    this.cliente_id = cliente_id;
    this.selectedCliente = new Cliente();

}

/**
* Shows or hides the create component
*/
showHideCreate(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreate = !this.showCreate;
}

/**
* Shows or hides the create component
*/
showHideEdit(cliente_id: number): void {
    if (!this.showEdit || (this.showEdit && cliente_id != this.selectedCliente.id)) {
        this.showView = false;
        this.showCreate = false;
        this.showEdit = true;
        this.cliente_id = cliente_id;
       this.selectedCliente = new Cliente();
     
    }
    else {
        this.showEdit = false;
        this.showView = true;
    }
}

/**
* Asks the service to update the list of authors
*/
getClientes(): void {
    this.clienteService.getClientes()
        .subscribe(clientes => {
            this.clientes = clientes;
        });
}


ngOnInit() {
    this.showCreate = false;
    this.getClientes();
  }

}
