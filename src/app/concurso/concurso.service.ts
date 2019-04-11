import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Concurso} from './concurso';
import {ConcursoDetail} from './concurso-detail';

const API_URL = '../../assets/';
const concursos = 'concursos.json';

@Injectable()
export class ConcursoService {
    constructor(private http: HttpClient) {}

    getConcursos(): Observable<Concurso[]> {
        return this.http.get<Concurso[]>(API_URL + concursos);
    }
    
    getConcursoDetail(concursoId): Observable<ConcursoDetail> {
      console.log(concursoId+" "+API_URL + "concurso-" + concursoId+".json");
        return this.http.get<ConcursoDetail>(API_URL + "concurso-" + concursoId+".json");
    }
    
     createConcurso(concurso): Observable<Concurso> {
         
        return this.http.post<Concurso>(API_URL + concursos, concurso);
    }
}

