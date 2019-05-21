import { Animacion } from "../animacion/animacion";
import { Cliente } from "../cliente/cliente";

export class Calificacion {
    
    id: number;
    /**
    * The Calificacion's comentario
    */
   comentario:String;

   /**
   * The Calificacion's calificacion
   */
   calificacion:number;    

  /**
   * The Calificacion's animacion
   */
  animacion:Animacion;  

   /**
   * The Calificacion's cliente
   */
  cliente:Cliente;  

}
