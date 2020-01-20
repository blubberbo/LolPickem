import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatSelectItem } from './models/mat-select-item.model';
import { GameSelectionInfo } from './models/game-selection-info.model';

@Injectable()
export class LolPickemService {
  constructor(private http: HttpClient) {}

  public readonly QueueMatSelectArray: Array<MatSelectItem> = [
    new MatSelectItem('RANKED_SOLO_5x5', 'Solo Queue'),
    new MatSelectItem('RANKED_FLEX_SR', 'Flex Queue')
  ];

  public readonly TierMatSelectArray: Array<MatSelectItem> = [
    new MatSelectItem('IRON', 'Iron'),
    new MatSelectItem('BRONZE', 'Bronze'),
    new MatSelectItem('SILVER', 'Silver'),
    new MatSelectItem('GOLD', 'Gold'),
    new MatSelectItem('PLATINUM', 'Platinum'),
    new MatSelectItem('DIAMOND', 'Diamond')
  ];

  public readonly DivisionMatSelectArray: Array<MatSelectItem> = [
    new MatSelectItem('I'),
    new MatSelectItem('II'),
    new MatSelectItem('III'),
    new MatSelectItem('IV')
  ];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // get an instance of Game Info
  getGameInfo(gameSelectionInfo: GameSelectionInfo): Observable<any> {
    // build the uri
    let gameInfoUri = `${environment.apiRootURI}${environment.apiGetGameInfoURI}`;
    gameInfoUri += `?queue=${gameSelectionInfo.queue}&tier=${gameSelectionInfo.tier}&division=${gameSelectionInfo.division}`;
    return this.http.get<any[]>(gameInfoUri, this.httpOptions);
  }
}
