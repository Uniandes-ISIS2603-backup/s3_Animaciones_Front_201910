import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Ronda } from "./ronda";
import { RondaDetail } from "./ronda-detail";

import { environment } from '../../environments/environment';
const API_URL = '../../assets/';
const rondas = 'rondas.json';

@Injectable({
  providedIn: 'root'
})
export class RondaService {

  constructor(private http: HttpClient) { }
  getRondas(): Observable<Ronda[]> {
    return this.http.get<Ronda[]>(API_URL + rondas);
}

getRondaDetail(rondaId): Observable<RondaDetail> {
    return this.http.get<RondaDetail>(API_URL + 'rondas-' + rondaId + '.json');
}

createRonda(ronda): Observable<Ronda> {
    return this.http.post<Ronda>(API_URL + rondas, ronda);
}

}
