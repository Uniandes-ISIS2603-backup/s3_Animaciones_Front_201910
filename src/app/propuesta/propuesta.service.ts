import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Propuesta} from './propuesta';
import {Factura} from '../factura/factura';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const prop = 'propuestas';

@Injectable({
    providedIn: 'root'
})
export class PropuestaService {

  constructor(private http: HttpClient) { }

  getPropuestas(): Observable<Propuesta[]>{
    return this.http.get<Propuesta[]>(API_URL+prop);
  }

  getPropuestaDetail(id): Observable<Propuesta>{
    return this.http.get<Propuesta>(API_URL+prop+"/"+id);
  }

  createPropuesta(yo): Observable<Propuesta>{
     // this.http.post<Factura>('');
    return this.http.post<Propuesta>(API_URL + prop,yo);
  }

}