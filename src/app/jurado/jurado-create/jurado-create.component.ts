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
  }

  registrar(): void{
    console.log('id jurado', this.jurado_id);
  }



}
