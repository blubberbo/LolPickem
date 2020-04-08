import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpUrlEncodingCodec } from '@angular/common/http';

import { PickemGameComponent } from './game.component';
import { LolPickemService } from 'src/app/shared/lol-pickem.service';
import { PickemTeamComponent } from '../team/team.component';
import { PickemComponent } from '../pickem.component';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedModule } from 'src/app/shared';
// TODO - Keenan - fix this test
xdescribe('GameComponent', () => {
  let component: PickemGameComponent;
  let fixture: ComponentFixture<PickemGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      declarations: [PickemGameComponent, PickemTeamComponent, PickemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [LolPickemService, HttpUrlEncodingCodec, AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickemGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
