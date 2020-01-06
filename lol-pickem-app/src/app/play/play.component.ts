import { Component, OnInit } from '@angular/core';
import { LolPickemService } from '../shared/lol-pickem.service';
import { GameSelectionInfo } from '../shared/models/game-selection-info.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  constructor(public lolPickemService: LolPickemService) {}

  // create the object to house the Game Selection info we will use to find a game and initialize it
  private gameSelectionInfo: GameSelectionInfo = new GameSelectionInfo(
    'RANKED_SOLO_5x5',
    'PLATINUM',
    'II'
  );

  ngOnInit() {}

  // When the Play button is clicked
  onPlay() {
    // the user wants to play a game
    // call the API to get GameInfo, passing the Game Selection Info
    return this.lolPickemService.getGameInfo(this.gameSelectionInfo).subscribe(res => {
      console.log(res);
    });
  }
}
