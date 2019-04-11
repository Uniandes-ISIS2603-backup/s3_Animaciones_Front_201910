import { Component, OnInit } from '@angular/core';
import { Jurado } from '../jurado';
import { JuradoService } from '../jurado.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-jurado-create',
  templateUrl: './jurado-create.component.html',
  styleUrls: ['./jurado-create.component.css']
})
/**
 * Clase que crea un componente jurado 
 */
export class JuradoCreateComponent implements OnInit {
  /**
   * Lista que contiene todos los jurados 
   */
  jurados : Jurado[];
  /**
   * Atributo que controla el show create para hacer una carga lazu
   */
  showCreate: boolean;
  /**
   * Atributo que contiene un id generado por el back 
   */
  jurado_id: any;
  /**
   * Atributo que contiene un jurado 
   */
  jurado : Jurado;
  
  /**
   * Constructor que inicializa el service de jurado 
   */
  constructor(private juradoService: JuradoService) { }

  /**
   * Metodo que crea la solicitu para obtener los jurados 
   */
  getJurados(): void {
    this.juradoService.getJurados().subscribe(jurados => {
        this.jurados = jurados;
        console.table(this.jurados);
    });
}

/**
 * Metodo que hace la carga perezosa
 */
showHideCreate(): void {
  this.showCreate = !this.showCreate!
}

  ngOnInit() {
    this.showCreate = false;
    this.getJurados();
    this.jurado = new Jurado ();
  }

  /**
   * Metodo que hace la solicitud de registro 
   */
  registrar(): void{
        this.juradoService.createJurado(this.jurado).subscribe(
          data=> {console.log('http',data);}
        );
        console.log('id jurado', this.jurado);
  }



}
