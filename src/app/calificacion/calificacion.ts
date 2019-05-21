import { Animacion } from "../animacion/animacion";
import { Cliente } from "../cliente/cliente";

export class Calificacion {
    
    id: number;
    /**
    * The Calificacion's comentario
    */
   comentario:String;
    /**
    * The calificacion's user
    */
   usuario:String;
   /**
   * The Calificacion's calificacion
   */
   calificacion:number;    

  /**
   * The Animacion's calificacion
   */
  animacion:Animacion;  

   /**
   * The Cliente's calificacion
   */
  cliente:Cliente;  

}
