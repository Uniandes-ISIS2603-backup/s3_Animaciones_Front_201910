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

    @Input()   calificaciones:Calificacion[];
/*
    const starTotal = 10;
 
    for( calificacion of calificaciones) {  
      // 2
      const starPercentage = (calificaciones[calificacion.calificacion] / 10) * 100;
      // 3
      const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
      // 4


      let myRow = document.getElementById('CalificacionListComponent');
      (myRow.querySelector(`.${calificacion.calificacion} .stars-inner`) as HTMLInputElement).style.width = starPercentageRounded; 
    
    
    }
    */
  
        getCalificaciones():void
  {
      this.calificacionService.getCalificaciones().subscribe(calificaciones => {this.calificaciones=calificaciones;});
  }
  ngOnInit() {
      this.getCalificaciones();
  }


}


