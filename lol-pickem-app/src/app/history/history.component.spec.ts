import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSort } from '@angular/material';
import { of } from 'rxjs';

import { HistoryComponent } from './history.component';
import { AuthService } from '../auth/auth.service';
import { LolPickemService } from '../shared/lol-pickem.service';
import { SharedModule } from '../shared/shared.module';
import { Game } from '../shared/models/game.model';
import { TeamType } from '../shared/models/enums/team-type.enum';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let authService: AuthService;
  let lolPickEmService: LolPickemService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, NoopAnimationsModule],
      declarations: [ HistoryComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [AuthService, LolPickemService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    lolPickEmService = TestBed.get(LolPickemService);
    fixture.detectChanges();
  });

  describe('Component Initialization', () => {
    it('should not call refreshHistories if the user is not logged in', () => {
      authService.loggedIn = false;
      spyOn(component, 'refreshHistories');

      component.ngOnInit();

      expect(component.refreshHistories).not.toHaveBeenCalled();
    });

    it('should call refresh histories if the user is logged in', () => {
      authService.loggedIn = true;
      spyOn(component, 'refreshHistories');

      component.ngOnInit();

      expect(component.refreshHistories).toHaveBeenCalled();
    });
  });

  describe('refreshHistories', () => {
    it('should throw an error if the user is not logged in when this method is called', () => {
      authService.loggedIn = false;

      expect(
        () => (
          component.refreshHistories()
        )).toThrowError('There is no user logged in, so we cannot get any histories. Please login to use this feature.')
    });

    it('should get the histories for a given user', () => {
      authService.loggedIn = true;
      const userHistory = [{
        id: '1',
        game: {} as Game,
        guessedCorrectly: true,
        guessedTeam: TeamType.red,
        timestamp: new Date()
      }];
      spyOn(lolPickEmService, 'getUserHistories').and.returnValue(of(userHistory));
      authService.userProfile$ = of({});
      component.sort = new MatSort();

      component.refreshHistories();

      expect(component.histories).toEqual(userHistory);
      expect(component.historiesDataSource.data).toEqual(component.histories);
      expect(component.historiesDataSource.sort).toEqual(component.sort);
      expect(component.historiesLoading).toEqual(false);
    });
  });
});
