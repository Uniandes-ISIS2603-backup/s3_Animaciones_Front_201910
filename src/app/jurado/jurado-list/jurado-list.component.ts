import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Jurado } from '../jurado';
import { JuradoService } from '../jurado.service';

@Component({
  selector: 'app-jurado-list',
  templateUrl: './jurado-list.component.html',
  styleUrls: ['./jurado-list.component.css']
})
export class JuradoListComponent implements OnInit {

  constructor(private juradoService: JuradoService) { }

  jurados : Jurado[];

  showCreate: boolean;

    getJurados(): void {
        this.juradoService.getJurados().subscribe(jurados => {
            this.jurados = jurados;
        });
    }

    showHideCreate(): void {
      this.showCreate = !this.showCreate!
  }
  ngOnInit() {
    this.showCreate = false;
    this.getJurados();
  }

}
