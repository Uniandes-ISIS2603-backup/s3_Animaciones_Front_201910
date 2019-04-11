import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import  { Jurado } from './jurado';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const JURADOS = "jurados";
const jurados = 'jurados.json';


@Injectable()
export class JuradoService {

  constructor(private http: HttpClient) { }

  getJurados(): Observable<Jurado[]> {
    return this.http.get<Jurado[]>(API_URL + JURADOS+ "/all");
  }
  

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
