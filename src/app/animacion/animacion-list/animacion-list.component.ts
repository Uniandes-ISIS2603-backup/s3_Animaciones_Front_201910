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

    constructor(private animacionService: AnimacionService, private route: ActivatedRoute) { }

    @Input() animaciones: Animacion[];

    showCreate: boolean;

    all: string = 'no';

    getAnimaciones(): void {
        this.animacionService.getAnimaciones().subscribe(animaciones => {
            this.animaciones = animaciones;
        });
    }

    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

    ngOnInit() {
        this.showCreate = false;
        this.route.queryParams.filter(params => params.all).subscribe(params => {
            this.all = params.all;
        });
        if(this.all == 'yes'){
            this.getAnimaciones();
        }
    }
}
