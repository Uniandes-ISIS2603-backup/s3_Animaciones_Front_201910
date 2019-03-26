import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Animacion } from '../animacion';
import { AnimacionService } from '../animacion.service';

@Component({
  selector: 'app-animacion-list',
  templateUrl: './animacion-list.component.html',
  styleUrls: ['./animacion-list.component.css']
})
export class AnimacionListComponent implements OnInit {

    constructor(private animacionService: AnimacionService) { }

    @Input() animaciones: Animacion[];

    getAnimaciones(): void {
        this.animacionService.getAnimaciones().subscribe(animaciones => {
            this.animaciones = animaciones;
        });
    }

    ngOnInit() {
        this.getAnimaciones();
    }
}
