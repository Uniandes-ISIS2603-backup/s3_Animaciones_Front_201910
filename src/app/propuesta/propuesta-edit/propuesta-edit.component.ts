import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {PropuestaService} from '../propuesta.service';
import {ToastrService} from 'ngx-toastr';
import {Propuesta} from '../propuesta';
import {Factura} from '../../factura/factura';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-propuesta-edit',
  templateUrl: './propuesta-edit.component.html',
  styleUrls: ['./propuesta-edit.component.css']
})
export class PropuestaEditComponent implements OnInit, OnChanges {

  constructor(private service: PropuestaService, private toastr: ToastrService, private route: ActivatedRoute, private router:Router) { }
  
  //@Input() propuesta: Propuesta;
  
  @Output() cancel = new EventEmitter();

  @Output() update = new EventEmitter();
  
  id: number;
  
  @Input() factura: Factura;

  ngOnInit() {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.factura = new Factura();
  }
  
  ngOnChanges(){
        this.ngOnInit()
  }
  
  cancelEdition(): void {
        this.cancel.emit();
  }
  
  newFactura():void{
      this.service.updatePropuesta(this.factura, this.id).subscribe(yo =>{
          this.toastr.success("Se creó la factura","yo");
          this.router.navigate(['/propuestas']);
      });
      this.update.emit();
  }

}
