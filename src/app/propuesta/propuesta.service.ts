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
    
    /**
     * Constructor de la clase
     */
  constructor(private http: HttpClient) { }
    
    /**
     * Método que retorna todas las propuestas
     */
  getPropuestas(): Observable<Propuesta[]>{
    return this.http.get<Propuesta[]>(API_URL+prop);
  }
    
    /**
     * Método que retorna una propuesta específica
     */
  getPropuestaDetail(id): Observable<Propuesta>{
    return this.http.get<Propuesta>(API_URL+prop+"/"+id);
  }

    /**
     * Método que crea una nueva propuesta
     */
  createPropuesta(yo): Observable<Propuesta>{
     // this.http.post<Factura>('');
    return this.http.post<Propuesta>(API_URL + prop,yo);
  }
  
    /**
     * Método que actualiza una propuesta con una nueva FACTURA
     */
  updatePropuesta(factura, yo): Observable<Propuesta> {
     return this.http.put<Propuesta>(API_URL + prop + '/' + yo+'/factura', factura);
   }

}