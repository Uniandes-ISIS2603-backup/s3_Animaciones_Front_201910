import { Artista } from '../artista/artista';
import { Ronda } from '../ronda/ronda';

export class AnimacionParticipante {
   
    id: number;
    puntaje: number;
    puesto: number;
    finalista: boolean;
    dinero: number;
    nombre: string;
    descripcionn: string;
    precio: number;
    tecnica: string;
    tags: string;
    link: string;
    calificacion: number;
    fecha: any;
    artista: Artista;
    ronda: Ronda;

    public getLink(): string {
        return this.link;
    }
}
