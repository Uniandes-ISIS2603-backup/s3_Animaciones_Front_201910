import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

    safeSrc: SafeResourceUrl;

    player: YT.Player;
    private id: string;

    constructor(
        private animacionService: AnimacionService,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer
    ) { }

    annimacion_id: number;

    showEdit: boolean;

    getAnimacionDetail(): void {
        this.animacionService.getAnimacionDetail(this.annimacion_id).subscribe(animacionDetail => {
            this.animacionDetail = animacionDetail
        });
    }

    showHideEdit(): void {
        this.showEdit = !this.showEdit!
    }

    ngOnInit() {
        this.showEdit = false;
        this.annimacion_id = +this.route.snapshot.paramMap.get('id');
        this.animacionDetail = new AnimacionDetail();
        this.getAnimacionDetail();
        this.id = this.animacionDetail.link;
       //this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.animacionDetail.link);
    }
}
