import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaListComponent } from './ronda-list.component';

describe('RondaListComponent', () => {
  let component: RondaListComponent;
  let fixture: ComponentFixture<RondaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RondaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
