import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Jurado } from '../jurado';
import { JuradoService } from '../jurado.service';

//Componente que permite exportar el componente de list
@Component({
  selector: 'app-jurado-list',
  templateUrl: './jurado-list.component.html',
  styleUrls: ['./jurado-list.component.css']
})
export class JuradoListComponent implements OnInit {

  //Contructor que crea el jurado service 
  constructor(private juradoService: JuradoService) { }

  //Atributo que contiene todos los jurados en una lista
  jurados : Jurado[];

  //Atributo que me permite controlar la visualizacion 
  showCreate: boolean;
    
    //Metodo que permite obtener todos los jurados 
    getJurados(): void {
        this.juradoService.getJurados().subscribe(jurados => {
            this.jurados = jurados;
        });
    }
    
    //Metodo que me permite utilizar el atributo showCreate 
    showHideCreate(): void {
      this.showCreate = !this.showCreate!
  }

  
  ngOnInit() {
    this.showCreate = false;
    this.getJurados();
  }

}
