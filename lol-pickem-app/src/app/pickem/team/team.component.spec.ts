import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickemTeamComponent } from './team.component';

describe('TeamComponent', () => {
  let component: PickemTeamComponent;
  let fixture: ComponentFixture<PickemTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickemTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickemTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
