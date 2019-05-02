import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Propuesta} from './propuesta';
import {Factura} from '../factura/factura';

@Injectable()
export class PropuestaService {

  constructor(private http: HttpClient) { }

  getPropuestas(): Observable<Propuesta[]>{
    return this.http.get<Propuesta[]>('../../assets/propuestas.json');
  }

  getPropuestaDetail(id): Observable<Propuesta>{
    return this.http.get<Propuesta>('../../assets/propuesta'+id+'.json');
  }

  createPropuesta(yo): Observable<Propuesta>{
    return this.http.post<Propuesta>('../../assets',yo);
  }

}