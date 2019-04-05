import{ Ronda } from "./ronda";
//import { AnimacionParticipante } from '../animacionParticipante/animacionParticipante';
import { Votacion } from '../votacion/votacion.module';
export class RondaDetail extends Ronda {
    //animacionesParticipantes: AnimacionParticipante[];
    votaciones: Votacion[];
}