import { Component, OnInit, Input } from '@angular/core';
import {Calificacion} from '../calificacion';
import { ActivatedRoute } from '@angular/router';
import {CalificacionService} from '../calificacion.service';

@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

  closeResult: string;


  constructor(private calificacionService: CalificacionService ,
    private route : ActivatedRoute
        ) { }

        public isCollapsed = false;
    @Input() calificaciones:Calificacion[];
  
        getCalificaciones():void
  {
      this.calificacionService.getCalificaciones().subscribe(calificaciones => {this.calificaciones=calificaciones;});
  }
  ngOnInit() {
      this.getCalificaciones();
  }


}


