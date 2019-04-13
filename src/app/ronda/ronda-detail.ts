/*
 * Archivo que repreenta una ronda Detallada
 */
import{ Ronda } from "./ronda";
//import { AnimacionParticipante } from '../animacionParticipante/animacionParticipante';
import { Votacion } from '../votacion/votacion';
export class RondaDetail extends Ronda {
 /*
 * arreglo con las animaciones participantes de la ronda
 */
    //animacionesParticipantes: AnimacionParticipante[];
 /*
 * arreglo con las votaciones de la ronda
 */
    votaciones: Votacion[];
}
