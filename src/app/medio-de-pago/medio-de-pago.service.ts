import { MedioDePago } from './medio-pago';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



import { environment } from '../../environments/environment';
const API_URL = environment.apiLocal;
const medioPago = 'medioDePago.json';

@Injectable({
  providedIn: 'root'
})
export class MedioDePagoService {

  constructor(private http: HttpClient) { }

  createJurado(medioDePago : MedioDePago): Observable<MedioDePago> {
    return this.http.post<MedioDePago>(API_URL + medioPago, medioDePago);
  }
}
