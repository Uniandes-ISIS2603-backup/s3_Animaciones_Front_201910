import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AnimacionParticipante } from './animacion-participante';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const animacionesParticipantes = 'animacionesParticipantes';

@Injectable()
export class AnimacionParticipanteService {
    constructor(private http: HttpClient) { }


 /**
     * Metodo para inscribir una animacion al concurso
     */
    createAnimacion(animacion): Observable<AnimacionParticipante> {
        return this.http.post<AnimacionParticipante>(API_URL + animacionesParticipantes, animacion);
    }

    /**
     * Metodo para obtener todas las animaciones del concurso
     */
    getAnimacionesParticipantes(): Observable<AnimacionParticipante[]> {
        return this.http.get<AnimacionParticipante[]>(API_URL + animacionesParticipantes);
    }

    /**
     * Metodo para obtener una animacion inscrita
     */
    getAnimacionParticipante(animacionId): Observable<AnimacionParticipante> {
        return this.http.get<AnimacionParticipante>(API_URL + animacionesParticipantes + '/' + animacionId);
    }
    /**
     * Metodo para actualizar una animacion inscrita
     */
    updateAnimacion(animacion): Observable<AnimacionParticipante> {
        return this.http.put<AnimacionParticipante>(API_URL + animacionesParticipantes + '/' + animacion.id, animacion);
    }
}
