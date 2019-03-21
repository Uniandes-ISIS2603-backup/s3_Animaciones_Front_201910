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

    @Input() animaciones: Animacion[];

    constructor(private animacionService: AnimacionService, private route: ActivatedRoute) { }

    allanimaciones: string = 'no';

    getAnimaciones(): void {
        this.animacionService.getAnimaciones().subscribe(animaciones => {
            this.animaciones = animaciones;
        });
    }

    ngOnInit() {
        this.route.queryParams.filter(params => params.allanimaciones).subscribe(params => {
            console.log(params);
            this.allanimaciones = params.allanimaciones;
            console.log(this.allanimaciones);
        });
        if(this.allanimaciones == 'yes'){
            console.log("allanimaciones");
            this.getAnimaciones();
        }
    }

}
