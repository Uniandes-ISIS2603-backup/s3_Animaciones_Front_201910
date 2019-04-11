import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Calificacion} from '../calificacion';
import { ActivatedRoute } from '@angular/router';
import {CalificacionService} from '../calificacion.service';
import {ToastrService} from 'ngx-toastr';
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
) {}

    /**
    * The id of the calificacion that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() calificacion_id: number;

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
   * The calificacion to edit
   */
   calificacion: Calificacion;

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
       this.calificacionService.updateCalificacion(this.calificacion)
           .subscribe(() => {
               this.update.emit();
               this.toastrService.success("The calificaicon's information was updated", "Calificacion edition");
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
    this.calificacion = new Calificacion();
    this.getCalificacion();
}

/**
* The function which is called every time the user chooses to edit a different editorial
*/
ngOnChanges() {
    this.ngOnInit();
}
}
