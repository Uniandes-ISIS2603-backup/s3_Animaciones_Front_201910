import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotacionCreateComponent } from './votacion-create.component';

describe('VotacionCreateComponent', () => {
  let component: VotacionCreateComponent;
  let fixture: ComponentFixture<VotacionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotacionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
