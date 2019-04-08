import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Animacion } from './animacion';
import { AnimacionDetail } from './animacion-detail';

import { environment } from '../../environments/environment';
import { ArtistaDetail } from '../artista/artista-detail';
const API_URL = environment.apiURL;
const animaciones = 'animaciones';

@Injectable()
export class AnimacionService {
    constructor(private http: HttpClient) { }

    getAnimaciones(): Observable<Animacion[]> {
        return this.http.get<Animacion[]>(API_URL + animaciones);
    }

    getAnimacionDetail(animacionId): Observable<AnimacionDetail> {
        return this.http.get<AnimacionDetail>(API_URL + animaciones + '/' + animacionId);
    }

    createAnimacion(animacion): Observable<AnimacionDetail> {
        return this.http.post<AnimacionDetail>(API_URL + animaciones, animacion);
    }

    updateAnimacion(animacion): Observable<AnimacionDetail> {
        return this.http.put<AnimacionDetail>(API_URL + animaciones + '/' + animacion.id, animacion);
    }
}
