import { Component, OnInit } from '@angular/core';
import { LolPickemService } from '../shared/lol-pickem.service';
import { GameSelectionInfo } from '../shared/models/game-selection-info.model';
import { Game } from '../shared/models/game.model';
import { AuthService } from '../auth/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pickem',
  templateUrl: './pickem.component.html',
  styleUrls: ['./pickem.component.scss'],
})
export class PickemComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public lolPickemService: LolPickemService,
  ) {}

  // create the object to house the Game Selection info we will use to find a game and initialize it
  gameSelectionInfo: GameSelectionInfo = new GameSelectionInfo(
    'RANKED_SOLO_5x5',
    'PLATINUM',
    'II',
  );
  // a place to hold the current game info
  game: Game = new Game();
  // a flag to show/hide the game component
  showGame = false;
  // a flag indicating a game is loading
  gameIsLoading = false;
  // a flag indicating the loading of a game is delayed
  gameLoadingIsDelayed = false;
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
   * get a game from the server and load it
   */
  loadGame(): void {
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
      .getGameInfo(this.gameSelectionInfo)
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
