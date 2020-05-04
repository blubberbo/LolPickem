import { Component, OnInit } from '@angular/core';
import { LolPickemService } from '../shared/lol-pickem.service';
import { Game } from '../shared/models/game.model';
import { AuthService } from '../auth/auth.service';
import { take } from 'rxjs/operators';
import { AccountSearchInfo } from '../shared/models/account-search-info.model';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl, Validators } from '@angular/forms';
import { SearchAccount } from '../shared/models/search-account.model';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-pickem',
  templateUrl: './pickem.component.html',
  styleUrls: ['./pickem.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(
          '100ms ease-in',
          style({
            transform: 'translateX(0%)',
            opacity: 1,
            position: 'absolute',
          }),
        ),
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class PickemComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public lolPickemService: LolPickemService,
  ) {}
  // tslint:disable-next-line: variable-name
  _constants = new Constants();
  // create the object to house the Account Selection info we will use to find a game and initialize it
  accountSearchInfo: AccountSearchInfo = new AccountSearchInfo(
    'RANKED_SOLO_5x5',
    'PLATINUM',
    'III',
  );
  // store the type of account search we are doing ('random' or 'search')
  accountSearchType = 'random';
  // a place to hold the current game info
  game: Game = new Game();
  // a flag indicating a game is loading
  gameIsLoading = false;
  // a flag indicating the loading of a game is delayed
  gameLoadingIsDelayed = false;
  // the search account form control
  searchAccountFormControl = new FormControl('', [Validators.required]);
  // a flag indicating the account search is in process
  searchPending = false;
  // a search account, returned from the account search
  searchAccount: SearchAccount;
  // a flag to show/hide the game component
  showGame = false;
  ngOnInit() {}

  /**
   * when the play button is clicked
   */
  onPlay(): void {
    // the user wants to play a game
    // get a game from the server and load it
    this.loadGame();
  }

  /**
   * when the play again button inside a the game is clicked
   */
  onGamePlayAgain(): void {
    // get a game from the server and load it
    this.loadGame();
  }

  /**
   * when an option is chosen for Account Search Type - initialize the AccountSearchInfo
   */
  onAccountSearchTypeChange(searchType: string): void {
    // no matter what we are switching to, initialize the Account Search Info and the Selected Search Account
    this.accountSearchInfo = new AccountSearchInfo();
    this.searchAccount = null;
    // reset the validators for the searchAccountFormControl
    this.searchAccountFormControl.reset();
    // initialize the component, removing any game data that might be loaded into the game container
    this.initializeComponent();
    // if we are switching to 'random'
    if (searchType === 'random') {
      // place the default values
      this.accountSearchInfo.queue = 'RANKED_SOLO_5x5';
      this.accountSearchInfo.tier = 'PLATINUM';
      this.accountSearchInfo.division = 'III';
    }
  }

  /**
   * when the search account button is clicked or enter is pressed
   */
  onSearchAccount(): void {
    // initialize the Selected Search Account to make sure the play button isn't pressed and uses an old value
    this.searchAccount = null;
    // only conduct the search if there is a summoner name entered ('undefined' was actually returning a summoner)
    if (this.accountSearchInfo.summonerName) {
      // indicate the search is pending
      this.searchPending = true;
      // call the api to search for the summoner's account
      this.lolPickemService
        .getAccountBySummonerName(this.accountSearchInfo.summonerName)
        .pipe(take(1))
        .subscribe((returnedAccount) => {
          // indicate the search is complete
          this.searchPending = false;
          // ensure the account has information
          if (returnedAccount.name) {
            // pass on the returned account
            this.searchAccount = returnedAccount;
          } else if (
            ((returnedAccount as any).status?.status_code as any) === 404
          ) {
            // change the flag on the account, to indicate it was not found
            this.searchAccount = new SearchAccount();
            this.searchAccount.accountNotFound = true;
          }
        });
    }
  }

  /**
   * when a search account is selected, pass the information to the Account Search Info, which will be passed to the api eventually
   */
  onSearchAccountSelected(): void {
    // pass the summonerName and accountId
    this.accountSearchInfo.summonerName = this.searchAccount.name;
    this.accountSearchInfo.accountId = this.searchAccount.accountId;
    // indicate the search account was selected (to trigger UI elements like the button text)
    this.searchAccount.selected = true;
  }

  /**
   * get a game from the server and load it
   */
  loadGame(): void {
    // only attempt to load the game if there is info being passed
    if (
      (this.accountSearchInfo.queue &&
        this.accountSearchInfo.tier &&
        this.accountSearchInfo.division) ||
      (this.searchAccount.selected && this.accountSearchInfo.accountId)
    ) {
      // initialize the component
      this.initializeComponent();
      // indicate a game is loading
      this.gameIsLoading = true;
      // create a timeout that - after 5 seconds, indicate the loading is delayed (aka show the text)
      const delayedTimeout = setTimeout(
        () => (this.gameLoadingIsDelayed = true),
        5000,
      );
      // call the API to get GameInfo, passing the Game Selection Info
      this.lolPickemService
        .getGameInfo(this.accountSearchInfo)
        .pipe(take(1))
        .subscribe((returnedGameInfo) => {
          // load the gameInfo to the local property (so it can be passed down)
          this.game = returnedGameInfo;
          // show the game component
          this.showGame = true;
          // indicate the loading has stopped
          this.gameIsLoading = false;
          // in the event the delayedTimeout has not been triggered yet, stop it
          clearTimeout(delayedTimeout);
          // since the loading has completed, it is no longer delayed as well
          this.gameLoadingIsDelayed = false;
        });
    }
  }

  /**
   * initialize the component
   */
  initializeComponent() {
    // clear any current game that might be stored
    this.game = new Game();
    // hide the game
    this.showGame = false;
  }
}
