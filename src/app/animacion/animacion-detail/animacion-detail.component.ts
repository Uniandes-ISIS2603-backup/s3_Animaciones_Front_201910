import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnimacionService } from '../animacion.service';
import { Animacion } from '../animacion';
import { AnimacionDetail } from '../animacion-detail';

@Component({
  selector: 'app-animacion-detail',
  templateUrl: './animacion-detail.component.html',
  styleUrls: ['./animacion-detail.component.css']
})
export class AnimacionDetailComponent implements OnInit {

    @Input() animacionDetail: AnimacionDetail;

    constructor(
        private animacionService: AnimacionService,
        private route: ActivatedRoute
    ) { }

    annimacion_id: number;

    getAnimacionDetail(): void {
        this.animacionService.getAnimacionDetail(this.annimacion_id).subscribe(animacionDetail => {
            this.animacionDetail = animacionDetail
        });
    }

    ngOnInit() {
        this.annimacion_id = +this.route.snapshot.paramMap.get('id');
        this.animacionDetail = new AnimacionDetail();
        this.getAnimacionDetail();
    }
}
