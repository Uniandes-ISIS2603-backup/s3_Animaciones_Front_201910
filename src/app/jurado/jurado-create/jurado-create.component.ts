import { Component, OnInit } from '@angular/core';
import { Jurado } from '../jurado';
import { JuradoService } from '../jurado.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-jurado-create',
  templateUrl: './jurado-create.component.html',
  styleUrls: ['./jurado-create.component.css']
})
export class JuradoCreateComponent implements OnInit {

  jurados : Jurado[];
  showCreate: boolean;
  jurado_id: any;
  jurado : Jurado;
  
  constructor(private juradoService: JuradoService) { }

  getJurados(): void {
    this.juradoService.getJurados().subscribe(jurados => {
        this.jurados = jurados;
        console.table(this.jurados);
    });
}

showHideCreate(): void {
  this.showCreate = !this.showCreate!
}

  ngOnInit() {
    this.showCreate = false;
    this.getJurados();
    this.jurado = new Jurado ();
  }

  registrar(): void{
        this.juradoService.createJurado(this.jurado).subscribe(
          data=> {console.log('http',data);}
        );
        console.log('id jurado', this.jurado);
  }



}
