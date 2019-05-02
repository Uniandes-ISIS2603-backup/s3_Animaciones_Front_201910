/*
 * Servicio para las votaciones
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Votacion } from "./votacion";

import { environment } from '../../environments/environment';
/*
 * constantes para las rutas a los archivos
 */
const API_URL = '../../assets/';
const votaciones = 'votaciones.json';

@Injectable({
  providedIn: 'root'
})
/*
 * Clase a exportar
 */
export class VotacionService {

  constructor(private http: HttpClient) { }
  getVotaciones(): Observable<Votacion[]> {
    return this.http.get<Votacion[]>(API_URL + votaciones);
}
/*
 * Función que crea una votación en la ruta especificada
 */
createVotacion(votacion): Observable<Votacion> {
  return this.http.post<Votacion>(API_URL + votaciones,votacion);
}
}
