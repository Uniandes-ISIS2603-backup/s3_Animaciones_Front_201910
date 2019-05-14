import { MedioDePago } from './medio-pago';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

/**
 * Constatnte que importa la direccion del back para hacer peticiones
 */
const API_URL = environment.apiURL;
/**
 * Constante que modela la direccion de mediosDePago
 */
const metodoDePago = "mediodepago"
/**
 * Constante que modela la direccion
 *  json de medioDePago 
 */
const medioPago = 'medioDePago.json';
/** 
@Injectable({
  providedIn: 'root'
})
*/

/**
 * Clase que modela el servicio de medioDePago
 */
@Injectable()
export class MedioDePagoService {

  /**
   * Constructor que ejecuta y crea el http client
   */
  constructor(private http: HttpClient) { }

  /**
   * Metodo que modela/crea el nuevo medio de pago
   */
  createMedioDePago(medioDePago : MedioDePago): Observable<MedioDePago> {
    let params = {
      id :1,
      numeroTarjeta : medioDePago.numeroTarjeta,
      codigo: medioDePago.codigo,
      fechaVencimiento: medioDePago.fechaVencimiento,
      formaDepago: medioDePago.formaDepago


    }




    return this.http.post<MedioDePago>(API_URL + metodoDePago, params);
  }
}
