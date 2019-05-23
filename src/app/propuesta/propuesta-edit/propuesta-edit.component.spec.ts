import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaEditComponent } from './propuesta-edit.component';

describe('PropuestaEditComponent', () => {
  let component: PropuestaEditComponent;
  let fixture: ComponentFixture<PropuestaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropuestaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
