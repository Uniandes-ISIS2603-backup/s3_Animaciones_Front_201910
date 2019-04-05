import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotacionDetailComponent } from './votacion-detail.component';

describe('VotacionDetailComponent', () => {
  let component: VotacionDetailComponent;
  let fixture: ComponentFixture<VotacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
