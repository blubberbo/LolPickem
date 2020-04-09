import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PickemTeamComponent } from './team.component';
import { PickemPlayerComponent } from '../player/player.component';
import { Player } from 'src/app/shared/models/player.model';
import { Team } from 'src/app/shared/models/team.model';

const mockTeam: Team = {
  players: [] as Player[],
  win: true,
  firstBlood: false,
  firstTower: true
}

describe('TeamComponent', () => {
  let component: PickemTeamComponent;
  let fixture: ComponentFixture<PickemTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickemTeamComponent, PickemPlayerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickemTeamComponent);
    component = fixture.componentInstance;
    component.team = mockTeam;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
