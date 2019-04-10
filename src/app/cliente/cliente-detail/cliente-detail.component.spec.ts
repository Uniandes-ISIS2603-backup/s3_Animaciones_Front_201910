import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import { ClienteDetailComponent } from './cliente-detail.component';
import { AppModule } from '../../app.module';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

describe('ClienteDetailComponent', () => {
  let component: ClienteDetailComponent;
  let fixture: ComponentFixture<ClienteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [AppRoutingModule, HttpClientModule, AppModule],
        declarations: [ ClienteDetailComponent ],
        providers: [
            {
                provide: APP_BASE_HREF,
                useValue: ''
            },
            ClienteService,
            {
                provide: ActivatedRoute,
                useValue: {
                    snapshot: {
                        paramMap: convertToParamMap({id: 100})
                    }
                }
            }
        ]
  })
  .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(ClienteDetailComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});
