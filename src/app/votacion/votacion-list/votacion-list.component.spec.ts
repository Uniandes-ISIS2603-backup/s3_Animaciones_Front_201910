import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotacionListComponent } from './votacion-list.component';

describe('VotacionListComponent', () => {
  let component: VotacionListComponent;
  let fixture: ComponentFixture<VotacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
