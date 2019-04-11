import { Component, OnInit } from '@angular/core';
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
  calificacion : Calificacion;
  
  constructor(private calificacionService: CalificacionService) { }

  getCalificaciones(): void {
    this.calificacionService.getCalificaciones().subscribe(calificaciones => {
        this.calificaciones = calificaciones;
        console.table(this.calificaciones);
    });
}

showHideCreate(): void {
  this.showCreate = !this.showCreate!
}

  ngOnInit() {
    this.showCreate = false;
    this.getCalificaciones();
    this.calificacion = new Calificacion ();
  }

  registrar(): void{
     
    console.log('id calificacion', this.calificacion);
  }
}
