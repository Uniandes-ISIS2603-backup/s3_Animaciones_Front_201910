import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import  { Jurado } from './jurado';


import { environment } from '../../environments/environment';

/**
 * Constatnte que importa la direccion del back para hacer peticiones
 */
const API_URL = environment.apiURL;
/**
 * Constante que modela la direccion de jurados
 */
const JURADOS = "jurados";
/**
 * Constante que modela la direccion
 *  json de jurados 
 */
const jurados = 'jurados.json';

/**
 * Clase que modela el servicio de jurado
 */
@Injectable()
export class JuradoService {

  /**
   * Constructor que ejecuta y crea el http client
   */
  constructor(private http: HttpClient) { }

  /**
   * Observable que contiene y genera la direccion al back de jurados
   */
  getJurados(): Observable<Jurado[]> {
    return this.http.get<Jurado[]>(API_URL + JURADOS+ "/all");
  }
  

  /**
   * Metodo que modela el nuevo jurado
   */
  createJurado(jurado : Jurado): Observable<Jurado> {
  let params={
    concurso:'',
    votaciones:'',
    usuario:jurado.usuario,
    contrasena:jurado.contrasena,
    credencial:jurado.credenciales,
    id:1
  };
    return this.http.post<Jurado>(API_URL +  JURADOS ,params);

  
}

}
