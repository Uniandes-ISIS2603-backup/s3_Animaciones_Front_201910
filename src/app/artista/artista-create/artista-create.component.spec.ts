import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaCreateComponent } from './artista-create.component';

describe('ArtistaCreateComponent', () => {
  let component: ArtistaCreateComponent;
  let fixture: ComponentFixture<ArtistaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
