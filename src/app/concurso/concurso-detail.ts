import{ Concurso } from "./concurso";
import { Ronda } from "../ronda/ronda";
//import { Jurado } from "../jurado/jurado";

export class ConcursoDetail extends Concurso {
    rondas: Ronda[];
    //jurados: Jurado[];
}
