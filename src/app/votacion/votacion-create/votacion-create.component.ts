/*
 * componente que representa el caso de uso para crear una votación
 */
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {VotacionService} from '../votacion.service';
import {Votacion} from '../votacion';
@Component({
  selector: 'app-votacion-create',
  templateUrl: './votacion-create.component.html',
  styleUrls: ['./votacion-create.component.css']
})
export class VotacionCreateComponent implements OnInit {

  constructor(    private VotacionService: VotacionService,
    private router: Router) { }
/*
 * votación que se va a crear
 */
    votacion : Votacion;
 /*
 * función que se llama al inicializar el componente
 */
  ngOnInit() {
    this.votacion = new Votacion();
  }

/*
 * función para crear una nueva votación
 */
  createVotacion(): Votacion {
    console.log(this.votacion);
this.VotacionService.createVotacion(this.votacion)
        .subscribe((votacion) => {
            this.votacion = votacion;
        });
  this.create.emit()
    return this.votacion;
}


  /**
* The output which tells the parent component
* that the user no longer wants to create an author
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user created a new author
*/
@Output() create = new EventEmitter();
/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelCreation(): void {
    this.cancel.emit();
}
}
