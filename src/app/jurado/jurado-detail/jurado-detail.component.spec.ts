import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoDetailComponent } from './jurado-detail.component';

describe('JuradoDetailComponent', () => {
  let component: JuradoDetailComponent;
  let fixture: ComponentFixture<JuradoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuradoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
