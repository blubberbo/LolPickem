import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpUrlEncodingCodec } from '@angular/common/http';

import { PickemComponent } from './pickem.component';
import { LolPickemService } from '../shared/lol-pickem.service';
import { Game } from '../shared/models/game.model';

fdescribe('PickemComponent', () => {
  let component: PickemComponent;
  let fixture: ComponentFixture<PickemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PickemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [LolPickemService, HttpUrlEncodingCodec]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('onPlay', () => {
    it('should call the loadGame method when called', () => {
      spyOn(component, 'loadGame');

      component.onPlay();

      expect(component.loadGame).toHaveBeenCalled();
    });
  });

  describe('onGamePlayAgain', () => {
    it('should call the loadGame method when called', () => {
      spyOn(component, 'loadGame');

      component.onGamePlayAgain();

      expect(component.loadGame).toHaveBeenCalled();
    });
  });

  describe('initializeComponent', () => {
    it('should set instantiate a new Game and set showGame to false when called', () => {
      component.initializeComponent();

      expect(component.game).toEqual(new Game());
      expect(component.showGame).toEqual(false);
    });
  });
});
