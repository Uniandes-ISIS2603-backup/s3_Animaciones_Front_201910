import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionEditComponent } from './animacion-edit.component';

describe('AnimacionEditComponent', () => {
  let component: AnimacionEditComponent;
  let fixture: ComponentFixture<AnimacionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
