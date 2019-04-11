import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Artista } from "./artista";
import { ArtistaDetail } from "./artista-detail";

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const artistas = 'artistas';

@Injectable()
export class ArtistaService {
    constructor(private http: HttpClient) { }

    /**
     * Metodo para obtener todos los artistas
     */
    getArtistas(): Observable<Artista[]> {
        return this.http.get<Artista[]>(API_URL + artistas);
    }

    /**
     * Metodo para obtener un artista
     */
    getArtistaDetail(artistaId): Observable<ArtistaDetail> {
        return this.http.get<ArtistaDetail>(API_URL + artistas + '/' + artistaId);
    }

    /**
     * Metodo para crear un artista
     */
    createArtista(artista): Observable<Artista> {
        return this.http.post<Artista>(API_URL + artistas, artista);
    }

    /**
     * Metodo para actualizar un artista
     */
    updateArtista(artista): Observable<ArtistaDetail> {
        return this.http.put<ArtistaDetail>(API_URL + artistas + '/' + artista.id, artista);
    }
}
