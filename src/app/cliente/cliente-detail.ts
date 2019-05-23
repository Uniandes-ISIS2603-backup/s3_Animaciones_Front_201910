import { Cliente } from './cliente';
import { Propuesta } from '../propuesta/propuesta';

export class ClienteDetail extends Cliente {
    propuestas: Propuesta[];
}
