import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Votacion } from '../votacion';
import { VotacionService } from '../votacion.service';

@Component({
  selector: 'app-votacion-list',
  templateUrl: './votacion-list.component.html',
  styleUrls: ['./votacion-list.component.css']
})
export class VotacionListComponent implements OnInit {

  constructor(private votacionService: VotacionService) { }
  votaciones: Votacion[]
  getRondas(): void {
    this.votacionService.getVotaciones().subscribe(votaciones => {
        this.votaciones = votaciones;
    });
}

  ngOnInit() {
    this.getRondas();
  }

}
