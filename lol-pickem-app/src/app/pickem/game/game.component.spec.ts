import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpUrlEncodingCodec } from '@angular/common/http';

import { PickemGameComponent } from './game.component';
import { LolPickemService } from 'src/app/shared/lol-pickem.service';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedModule } from 'src/app/shared';
import { Game } from 'src/app/shared/models/game.model';
import { GameDetails } from 'src/app/shared/models/game-details.model';

const mockGame: Game = {
  gameId: 1,
  seasonId: 1234,
  queueId: 2222,
  gameDetails: {} as GameDetails
}

describe('GameComponent', () => {
  let component: PickemGameComponent;
  let fixture: ComponentFixture<PickemGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      declarations: [PickemGameComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [LolPickemService, HttpUrlEncodingCodec, AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickemGameComponent);
    component = fixture.componentInstance;
    component.game = mockGame;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
