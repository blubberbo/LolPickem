import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickemPlayerComponent } from './player.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';


describe('PlayerComponent', () => {
  let component: PickemPlayerComponent;
  let fixture: ComponentFixture<PickemPlayerComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickemPlayerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickemPlayerComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  describe("PickemPlayerComponent Template", () => {
    let fakePlayer: Player;

    beforeEach(() => {
      fakePlayer = {
        accountId: "fakeAccountId",
        summonerName: "summoner1",
        championId: 1,
        championName: "fakeChampionName",
        championSquareImageUrl: "someUrl",
        spell1: {
          name: "This is spell1",
          spellId: 1,
          imageName: "fameImage1"
        },
        spell2: {
          name: "This is spell2",
          spellId: 2,
          imageName: "fameImage2"
        }
      };
    });

    it("should have a 'left' alignment by default if a value is not passed into the align Input binding", () => {
      expect(component.align).toEqual('left');
    });

    it("should have a class of 'right' if that value is passed into the align Input binding", () => {
      component.player = fakePlayer;
      component.align = 'right';

      fixture.detectChanges();
      const playerContainer: HTMLElement = debugElement.nativeElement.querySelector('.player-container');

      expect(playerContainer.classList.contains('right')).toEqual(true);
    });

    it("should have the correct summoner and champion names from the given player", () => {
      component.player = fakePlayer;

      fixture.detectChanges();
      const summonerSpan: HTMLElement = debugElement.nativeElement.querySelector('.summoner-name');
      const championSpan: HTMLElement = debugElement.nativeElement.querySelector('.champion-name');

      expect(summonerSpan.innerHTML).toEqual("summoner1");
      expect(championSpan.innerHTML).toEqual("fakeChampionName");
    });
  });

  describe("onChampionImageLoad", () => {
    it("should change the property that indicates the champion image has loaded from false to true when called", () => {
      expect(component.championImageLoaded).toEqual(false);

      component.onChampionImageLoad();

      expect(component.championImageLoaded).toEqual(true);
    });
  });

  describe("onSpell1Load", () => {
    it("should change the property that indicates the spell 1 image has loaded from false to true when called", () => {
      expect(component.spell1ImageLoaded).toEqual(false);

      component.onSpell1Load();

      expect(component.spell1ImageLoaded).toEqual(true);
    });
  });

  describe("onSpell2Load", () => {
    it("should change the property that indicates the spell 2 image has loaded from false to true when called", () => {
      expect(component.spell2ImageLoaded).toEqual(false);

      component.onSpell2Load();

      expect(component.spell2ImageLoaded).toEqual(true);
    });
  });
});
