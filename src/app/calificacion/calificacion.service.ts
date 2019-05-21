
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Calificacion} from './calificacion';

import { environment } from '../../environments/environment';
const API_URL =  environment.apiURL;
const calificaciones = 'calificaciones';

@Injectable({
  providedIn: 'root'
})
/**
* The service provider for everything related to calificaciones
*/
@Injectable()
export class CalificacionService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
  
   /**
     * Returns the Observable object containing the list of calificaciones retrieved from the API
     * @returns The list of calificaciones in real time
     */
    getCalificaciones(): Observable<Calificacion[]> {
      return this.http.get<Calificacion[]>(API_URL + calificaciones);
}
 
 /**
    * Returns the Observable object containing the cliente retrieved from the API
    * @returns The calificacion
    */
   getCalificacionDetail(calificacionId): Observable<Calificacion> {
    return this.http.get<Calificacion>(API_URL + calificaciones + '/' + calificacionId);
}

 createCalificacion(calificacion: Calificacion): Observable<Calificacion> {
   return this.http.post<Calificacion>(API_URL + calificaciones, calificacion);
 }
   /**
    * Updates an cliente
    * @param calificaicon The calificacion's information updated
    * @returns The confirmation that the calificacion was updated
    */
   updateCalificacion(calificacion : Calificacion): Observable<Calificacion> {
    return this.http.post<Calificacion>(API_URL+ calificaciones + '/' + calificacion.id, calificacion);

}
 }