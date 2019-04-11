import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Votacion } from "./votacion";

import { environment } from '../../environments/environment';
const API_URL = '../../assets/';
const votaciones = 'votaciones.json';

@Injectable({
  providedIn: 'root'
})
export class VotacionService {

  constructor(private http: HttpClient) { }
  getVotaciones(): Observable<Votacion[]> {
    return this.http.get<Votacion[]>(API_URL + votaciones);
}

createVotacion(votacion): Observable<Votacion> {
  return this.http.post<Votacion>(API_URL + votaciones,votacion);
}
}
