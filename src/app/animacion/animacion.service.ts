import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Animacion } from './animacion';
import { AnimacionDetail } from './animacion-detail';

import { environment } from '../../environments/environment';
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
}
