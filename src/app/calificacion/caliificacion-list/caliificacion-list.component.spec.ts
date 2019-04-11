import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliificacionListComponent } from './caliificacion-list.component';

describe('CaliificacionListComponent', () => {
  let component: CaliificacionListComponent;
  let fixture: ComponentFixture<CaliificacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaliificacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliificacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
