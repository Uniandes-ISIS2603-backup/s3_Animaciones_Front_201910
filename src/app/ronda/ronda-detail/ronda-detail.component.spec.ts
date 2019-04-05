import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaDetailComponent } from './ronda-detail.component';

describe('RondaDetailComponent', () => {
  let component: RondaDetailComponent;
  let fixture: ComponentFixture<RondaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RondaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
