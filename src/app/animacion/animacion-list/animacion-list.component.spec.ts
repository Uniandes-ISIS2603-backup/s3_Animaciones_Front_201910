import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionListComponent } from './animacion-list.component';

describe('AnimacionListComponent', () => {
  let component: AnimacionListComponent;
  let fixture: ComponentFixture<AnimacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
