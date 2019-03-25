import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionDetailComponent } from './animacion-detail.component';

describe('AnimacionDetailComponent', () => {
  let component: AnimacionDetailComponent;
  let fixture: ComponentFixture<AnimacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
