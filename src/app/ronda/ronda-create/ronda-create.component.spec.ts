import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaCreateComponent } from './ronda-create.component';

describe('RondaCreateComponent', () => {
  let component: RondaCreateComponent;
  let fixture: ComponentFixture<RondaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RondaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
