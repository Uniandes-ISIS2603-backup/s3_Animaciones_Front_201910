import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Calificacion } from '../calificacion';
import { ActivatedRoute } from '@angular/router';
import { CalificacionService } from '../calificacion.service';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../../cliente/cliente';
import { ClienteService } from '../../cliente/cliente.service';
@Component({
    selector: 'app-calificacion-edit',
    templateUrl: './calificacion-edit.component.html',
    styleUrls: ['./calificacion-edit.component.css']
})
export class CalificacionEditComponent implements OnInit {

    /**
    * Constructor for the component
    * @param calificacionService The calificacion' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private calificacionService: CalificacionService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private clienteService: ClienteService
    ) { }


    cliente: Cliente;

    clientes: Cliente[];

    /**
 * The calificacion to edit
 */
    @Input() calificacion: Calificacion;


    /**
    * The output which tells the parent component
    * that the user no longer wants to create an cliente
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new cliente
    */
    @Output() update = new EventEmitter();

    /**
    * The id of the calificacion that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    calificacion_id: number;

    /**
    * Retrieves the information of the cliente
    */
    getCalificacion(): void {
        this.calificacionService.getCalificacionDetail(this.calificacion_id)
            .subscribe(calificacion => {
                this.calificacion = calificacion;
            });
    }

    /**
    * Updates the cliente's information
    */
    editCalificacion(): void {
        this.calificacionService.updateCalificacion(this.calificacion).subscribe(() => {
            this.toastrService.success("La informacion de la calificación fue actualizada", "Calificación Edit");
        });
        this.update.emit();
    }


    getClientes(): void {
        this.clienteService.getClientes().subscribe(clientes => {
            this.clientes = clientes;
        }, err => {
            this.toastrService.error(err, 'Error');
        });
    }

    /**
    * Informs the parent component that the user no longer wants to update the editorial
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
      * The function which initializes the component
      */
    ngOnInit() {
 
        this.calificacion_id = +this.route.snapshot.paramMap.get('id');
        if (this.calificacion_id) {
            this.calificacion = new Calificacion();
            this.getCalificacion();
            this.calificacion.cliente = new Cliente();
            this.getClientes();
        }
    }

    /**
    * The function which is called every time the user chooses to edit a different editorial
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
