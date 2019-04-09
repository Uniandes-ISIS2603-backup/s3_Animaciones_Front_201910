import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import  { Jurado } from './jurado';
//Aqui hace falta el jurado-detail

import { environment } from '../../environments/environment';
const API_URL = environment.apiLocal;
const jurados = 'jurados.json';


@Injectable()
export class JuradoService {

  constructor(private http: HttpClient) { }

  getJurados(): Observable<Jurado[]> {
    return this.http.get<Jurado[]>(API_URL + jurados);
  }
  //getJuradoDetail

  createJurado(jurado : Jurado): Observable<Jurado> {
    return this.http.post<Jurado>(API_URL + jurados, jurado);

  //updateJuradoDetail
}

}
