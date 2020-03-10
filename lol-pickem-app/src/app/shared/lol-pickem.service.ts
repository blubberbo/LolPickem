import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpUrlEncodingCodec,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatSelectItem } from './models/mat-select-item.model';
import { GameSelectionInfo } from './models/game-selection-info.model';
import { Game } from './models/game.model';
import { UserHistory } from './models/user-history.model';

@Injectable()
export class LolPickemService {
  constructor(
    private http: HttpClient,
    public httpUrlEncodingCodec: HttpUrlEncodingCodec,
  ) {}

  public readonly QueueMatSelectArray: Array<MatSelectItem> = [
    new MatSelectItem('RANKED_SOLO_5x5', 'Solo Queue'),
    new MatSelectItem('RANKED_FLEX_SR', 'Flex Queue'),
  ];

  public readonly TierMatSelectArray: Array<MatSelectItem> = [
    new MatSelectItem('IRON', 'Iron'),
    new MatSelectItem('BRONZE', 'Bronze'),
    new MatSelectItem('SILVER', 'Silver'),
    new MatSelectItem('GOLD', 'Gold'),
    new MatSelectItem('PLATINUM', 'Platinum'),
    new MatSelectItem('DIAMOND', 'Diamond'),
  ];

  public readonly DivisionMatSelectArray: Array<MatSelectItem> = [
    new MatSelectItem('I'),
    new MatSelectItem('II'),
    new MatSelectItem('III'),
    new MatSelectItem('IV'),
  ];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  /**
   * get an instance of Game Info
   * @param gameSelectionInfo: GameSelectionInfo
   * @returns game: Game
   */
  getGameInfo(gameSelectionInfo: GameSelectionInfo): Observable<any> {
    // build the uri
    let gameInfoUri = `${environment.apiRootURI}${environment.apiGameBaseURI}`;
    gameInfoUri += `?queue=${gameSelectionInfo.queue}&tier=${gameSelectionInfo.tier}&division=${gameSelectionInfo.division}`;
    return this.http.get<any[]>(gameInfoUri, this.httpOptions);
  }

  /**
   * patch a user by adding a userHistory item to the array of histories
   * @param userEmail: string - the email of the logged in user
   * @param game: Game - the game that the user is guessing about
   * @param guessedCorrectly: Boolean - if the user guessed the winner correctly
   * @returns void
   */
  addUserHistoryToUser(
    userEmail: string,
    game: Game,
    guessedCorrectly: boolean,
  ): void {
    // build the uri
    let addUserHistoryUri = `${environment.apiRootURI}${environment.apiUserBaseURI}`;
    addUserHistoryUri += `/${this.httpUrlEncodingCodec.encodeValue(
      userEmail,
    )}/histories`;
    console.log(addUserHistoryUri);
    // build the body from the game and the guess
    const userHistory = new UserHistory(game, guessedCorrectly);
    this.http
      .patch<any[]>(addUserHistoryUri, userHistory, this.httpOptions)
      .subscribe();
  }
}
