import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpUrlEncodingCodec } from '@angular/common/http';

import { PickemComponent } from './pickem.component';
import { LolPickemService } from '../shared/lol-pickem.service';
import { Game } from '../shared/models/game.model';
import { AccountSearchInfo } from '../shared/models/account-search-info.model';
import { SearchAccount } from '../shared/models/search-account.model';

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

  describe('onAccountSearchTypeChange', () => {
    it('should only instantiate the AccountSearchInfo class and reset the searchAccountFormControl validators when searchType is not "random"', () => {
      spyOn(component.searchAccountFormControl, 'reset');

      component.onAccountSearchTypeChange('fake');

      expect(component.accountSearchInfo).toEqual(new AccountSearchInfo());
      expect(component.searchAccount).toBeNull();
      expect(component.searchAccountFormControl.reset).toHaveBeenCalled();
    });

    it('should set the queue, tier, and division properties on the accountSearchInfo object if the searchType is "random"', () => {
      spyOn(component.searchAccountFormControl, 'reset');

      component.onAccountSearchTypeChange('random');

      expect(component.searchAccount).toBeNull();
      expect(component.searchAccountFormControl.reset).toHaveBeenCalled();
      expect(component.accountSearchInfo.queue).toEqual('RANKED_SOLO_5x5');
      expect(component.accountSearchInfo.tier).toEqual('PLATINUM');
      expect(component.accountSearchInfo.division).toEqual('III');
    });
  });

  describe('onSearchAccountSelected', () => {
    it('should set the summonerName and accountId properties and toggle selected to true when called', () => {
      component.searchAccount = new SearchAccount();
      component.searchAccount.name = 'Some Name';
      component.searchAccount.accountId = '123456';

      component.onSearchAccountSelected();

      expect(component.accountSearchInfo.summonerName).toEqual('Some Name');
      expect(component.accountSearchInfo.accountId).toEqual('123456');
      expect(component.searchAccount.selected).toEqual(true);
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
