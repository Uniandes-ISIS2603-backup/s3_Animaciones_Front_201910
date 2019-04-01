import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionCreateComponent } from './animacion-create.component';

describe('AnimacionCreateComponent', () => {
  let component: AnimacionCreateComponent;
  let fixture: ComponentFixture<AnimacionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
