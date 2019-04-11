import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {PropuestaService} from '../propuesta.service';
import {Propuesta} from '../propuesta';


@Component({
  selector: 'app-propuesta-create',
  templateUrl: './propuesta-create.component.html',
  styleUrls: ['./propuesta-create.component.css']
})
export class PropuestaCreateComponent implements OnInit {

  propuesta: Propuesta;

  constructor(private service: PropuestaService, private router: Router, private toastrService: ToastrService) { }

  cancelCreation(): void {
        this.toastrService.warning('No se creó la Propuesta', 'Crear propuesta');
        this.router.navigate(['/propuestas']);
  }

  crearPropuesta(): Propuesta{
    this.service.createPropuesta(this.propuesta).subscribe(yo => {
                this.propuesta.id = yo.id;
                this.router.navigate(['/propuestas/' + yo.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
    });
    return this.propuesta;
  }

  ngOnInit() {
    this.propuesta = new Propuesta();
  }

}