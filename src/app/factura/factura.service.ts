import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Factura} from './factura';import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const prop = 'facturas';

@Injectable()
export class FacturaService {

  /**
   * Constructor del servicio.
   * @param https El inyectable http
   */
  constructor(private http: HttpClient) { }

  /**
   * Método que trae una Factura
   * @param id Identificador de la factura
   * @return La factura, si la encontró
   */
  getFactura(id): Observable<Factura>{
    return this.http.get<Factura>(API_URL+"propuestas/"+id+'/factura');
  }

  /**
   * Método que crea una Factura
   * @param yo
   * @return La factura creada, si fue posible
   */
  createFactura(yo): Observable<Factura>{
    return this.http.post<Factura>(API_URL+prop,yo);
  }

}
