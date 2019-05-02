/*
 * clase que representa el servicio de una ronda
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Ronda } from "./ronda";
import { RondaDetail } from "./ronda-detail";

import { environment } from '../../environments/environment';
/*
 * constantes que representan la ruta
 */
const API_URL = '../../assets/';
const rondas = 'rondas.json';

@Injectable({
  providedIn: 'root'
})
export class RondaService {
/*
 * función constructora
 */
  constructor(private http: HttpClient) { }
  getRondas(): Observable<Ronda[]> {
    return this.http.get<Ronda[]>(API_URL + rondas);
}
/*
 * función que obtiene el detalle de una ronda de una ruta específicada
 */
getRondaDetail(rondaId): Observable<RondaDetail> {
    return this.http.get<RondaDetail>(API_URL + 'rondas-' + rondaId + '.json');
}
/*
 * función que crea una ronda en una ruta específicada
 */
createRonda(ronda): Observable<Ronda> {
    return this.http.post<Ronda>(API_URL + rondas, ronda);
}

}
