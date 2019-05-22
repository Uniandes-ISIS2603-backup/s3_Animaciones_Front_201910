import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';
import {Cliente} from '../../cliente/cliente';
import {ClienteService} from '../../cliente/cliente.service';


@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})
export class CalificacionCreateComponent implements OnInit {

  calificaciones : Calificacion[];
  showCreate: boolean;
  calificacion_id: any;

  
  constructor(private calificacionService: CalificacionService,private toastService: ToastrService, private clienteService: ClienteService) { }
  calificacion: Calificacion;
  cliente: Cliente;

  clientes: Cliente[];

 
  @Output() cancel = new EventEmitter();

  @Output() create = new EventEmitter();


  createCalificacion(): Calificacion {
    this.calificacionService.createCalificacion(this.calificacion).subscribe((calificacion) => {
      this.calificacion = calificacion;
      this.create.emit();
      this.toastService.success("La calificación fue creada","Creacion de Calificacion");
  }, err => {
      this.toastService.error(err,"Error");
  });
  return this.calificacion;
}


getClientes(): void {
  this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
  }, err => {
      this.toastService.error(err, 'Error');
  });
}
cancelCreation(): void {
  this.cancel.emit();
}

ngOnInit() {
  this.calificacion = new Calificacion();
  this.calificacion.cliente = new Cliente();
  this.getClientes();
}
}
