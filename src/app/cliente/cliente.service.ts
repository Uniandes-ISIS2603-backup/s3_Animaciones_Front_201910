import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './cliente';
import { ClienteDetail } from './cliente-detail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const clientes = 'clientes';

@Injectable({
  providedIn: 'root'
})
/**
* The service provider for everything related to clientes
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
   * @returns The list of clientes in real time
   */
   getClientes(): Observable<Cliente[]> {
       return this.http.get<Cliente[]>(API_URL + clientes);
   }

    /**
     * Metodo para obtener un cliente
     */
    getClienteDetail(clienteId): Observable<ClienteDetail> {
        return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteId);
    }
   

   createCliente(cliente : Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(API_URL + clientes, cliente);
}
     /**
    * Updates an cliente
    * @param cliente The cliente's information updated
    * @returns The confirmation that the cliente was updated
    */
   updateCliente(cliente : Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(API_URL+ clientes + '/' + cliente.id, cliente);

}

}