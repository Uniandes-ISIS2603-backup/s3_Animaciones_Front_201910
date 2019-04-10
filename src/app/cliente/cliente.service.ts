import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './cliente';

import { environment } from '../../environments/environment';
const API_URL = environment.apiLocal;
const clientes = 'clientes.json';

@Injectable({
  providedIn: 'root'
})
/**
* The service provider for everything related to authors
*/
@Injectable()
export class ClienteService {

 /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
   /**
   * Returns the Observable object containing the list of clientes retrieved from the API
   * @returns The list of authors in real time
   */
   getClientes(): Observable<Cliente[]> {
       return this.http.get<Cliente[]>(API_URL + clientes);
   }

   
}
