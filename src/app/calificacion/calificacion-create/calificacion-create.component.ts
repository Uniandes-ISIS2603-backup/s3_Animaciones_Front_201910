import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})
export class CalificacionCreateComponent implements OnInit {

  calificaciones : Calificacion[];
  showCreate: boolean;
  calificacion_id: any;

  
  constructor(private calificacionService: CalificacionService,private toastService: ToastrService) { }
  calificacion: Calificacion;
 
  @Output() cancel = new EventEmitter();

  @Output() create = new EventEmitter();


  getCalificaciones(): Calificacion {
    this.calificacionService.createCalificacion(this.calificacion).subscribe((calificacion) => {
      this.calificacion = calificacion;
      this.create.emit();
      this.toastService.success("La calificación fue creada","Creacion de Calificacion");
  }, err => {
      this.toastService.error(err,"Error");
  });
  return this.calificacion;
}

cancelCreation(): void {
  this.cancel.emit();
}

ngOnInit() {
  this.calificacion = new Calificacion();
}
}
