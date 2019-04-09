import { ActivatedRoute } from '@angular/router';
import { JuradoService } from './../jurado.service';
import { Component, OnInit } from '@angular/core';
import { Jurado } from '../jurado';

@Component({
  selector: 'app-jurado-detail',
  templateUrl: './jurado-detail.component.html',
  styleUrls: ['./jurado-detail.component.css']
})
export class JuradoDetailComponent implements OnInit {

  id = 0;

  jurado :Jurado ;

  showCreate: boolean;

  constructor(private juradoService :JuradoService,
     private activateRoute :ActivatedRoute) { this.id = activateRoute.snapshot.params['id']}

  
  getJurado(): void {
    this.juradoService.getJurados().subscribe(jurados => {
      jurados.forEach(j => {
        if(j.id == this.id){
          this.jurado =j;
        }
      });

    });
}

showHideCreate(): void {
  this.showCreate = !this.showCreate!
}

ngOnInit() {
  this.getJurado();
}

}
