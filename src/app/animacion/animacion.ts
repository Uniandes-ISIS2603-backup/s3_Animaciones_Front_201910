import { Artista } from '../artista/artista';

export class Animacion {
    id: number;
    nombre: string;
    descripcionn: string;
    precio: number;
    tecnica: string;
    tags: string;
    link: string;
    calificacion: number;
    fecha: any;
    artista: Artista;

    public getLink(): string {
        return this.link;
    }
}
