import { Component, OnInit, Input  } from '@angular/core';
import {Calificacion} from '../calificacion';
import { ActivatedRoute } from '@angular/router';
import {CalificacionService} from '../calificacion.service';

@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
  styleUrls: ['./calificacion-detail.component.css']
})
export class CalificacionDetailComponent implements OnInit {

    id: number;

    calificacion :Calificacion ;
  
    showCreate: boolean;
    showEdit: boolean;


    constructor(private calificacionService :CalificacionService,
       private activateRoute :ActivatedRoute) { this.id = activateRoute.snapshot.params['id']}
  
    
       getCalificacion(): void {
           this.calificacionService.getCalificacionDetail(this.id).subscribe(calificaciones => {
            this.calificacion =calificaciones;
  
      });
  }
  
  showHideCreate(): void {
    this.showCreate = !this.showCreate!
  }

  showHideEdit(): void {
    this.showEdit = !this.showEdit!
  }
  
    ngOnInit() {
      this.id = +this.activateRoute.snapshot.paramMap.get('id');
    this.getCalificacion();
    this.showEdit = false;
  }
  

}
