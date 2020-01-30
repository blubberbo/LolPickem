import { Component, OnInit } from '@angular/core';
import { LolPickemService } from '../shared/lol-pickem.service';
import { GameSelectionInfo } from '../shared/models/game-selection-info.model';
import { Game } from '../shared/models/game.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  constructor(public lolPickemService: LolPickemService) {}

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
  gameIsLoading = false;
  ngOnInit() {}

  /**
   * when the play button is clicked
   */
  onPlay() {
    // the user wants to play a game
    // get a game from the server and load it
    this.loadGame();
  }

  /**
   * when the play again button inside a the game is clicked
   */
  onGamePlayAgain() {
    // get a game from the server and load it
    this.loadGame();
  }

  /**
   * get a game from the server and load it
   */
  loadGame() {
    // initialize the component
    this.initializeComponent();
    // indicate a game is loading
    this.gameIsLoading = true;
    // call the API to get GameInfo, passing the Game Selection Info
    return this.lolPickemService
      .getGameInfo(this.gameSelectionInfo)
      .subscribe(returnedGameInfo => {
        // load the gameInfo to the local property (so it can be passed down)
        this.game = returnedGameInfo;
        // show the game component
        this.showGame = true;
        // indicate the loading has stopped
        this.gameIsLoading = false;
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
