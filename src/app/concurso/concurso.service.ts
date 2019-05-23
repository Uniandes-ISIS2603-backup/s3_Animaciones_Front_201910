import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Concurso} from './concurso';
import {ConcursoDetail} from './concurso-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const concursos = 'concursos';


@Injectable()
export class ConcursoService {
    constructor(private http: HttpClient) {}

    getConcursos(): Observable<Concurso[]> {
        return this.http.get<Concurso[]>(API_URL + concursos);
    }
    
    getConcursoDetail(concursoId): Observable<ConcursoDetail> {
        return this.http.get<ConcursoDetail>(API_URL + concursos + '/' + concursoId);
    }
    
     createConcurso(concurso): Observable<Concurso> {
        return this.http.post<Concurso>(API_URL + concursos, concurso);
    }
    
    /**
     * Metodo para actualizar un concurso
     */
    updateConcurso(concurso): Observable<ConcursoDetail> {
        return this.http.put<ConcursoDetail>(API_URL + concursos + '/' + concurso.id, concurso);
    }
}

