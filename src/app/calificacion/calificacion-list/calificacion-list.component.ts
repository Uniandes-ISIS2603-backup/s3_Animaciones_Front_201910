import {Component, OnInit, ViewContainerRef, Input} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

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
    private route : ActivatedRoute,   private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
        ) { }

        public isCollapsed = false;

    @Input()   calificaciones:Calificacion[];

    /**
* Shows or hides the cliente-create-component
*/
showCreate: boolean;

/**
 * Shows or hides the detail of an calificacion
 */
showView: boolean;

/**
* Shows or hides the edition of an calificacion
*/
showEdit: boolean;
/**
 * the calificacion that the user views.
 */
selectedCalificacion: Calificacion;

/**
* The id of the calificacion that the user wants to view
*/
calificacion_id: number;

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
  /**
* Shows or hides the create component
*/
showHideCreate(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreate = !this.showCreate;
}
        getCalificaciones():void
  {
      this.calificacionService.getCalificaciones().subscribe(calificaciones => {this.calificaciones=calificaciones;});
  }
  ngOnInit() {
      //this.getCalificaciones();
      this.showCreate=false;
  }


}


