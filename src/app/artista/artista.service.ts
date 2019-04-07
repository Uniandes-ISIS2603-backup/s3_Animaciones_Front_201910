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

    getArtistas(): Observable<Artista[]> {
        return this.http.get<Artista[]>(API_URL + artistas);
    }

    getArtistaDetail(artistaId): Observable<ArtistaDetail> {
        return this.http.get<ArtistaDetail>(API_URL + artistas + '/' + artistaId);
    }

    createArtista(artista): Observable<Artista> {
        return this.http.post<Artista>(API_URL + artistas, artista);
    }

    updateArtista(artista): Observable<ArtistaDetail> {
        return this.http.put<ArtistaDetail>(API_URL + artistas + '/' + artista.id, artista);
    }
}
