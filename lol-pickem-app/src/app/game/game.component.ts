import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../shared/models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor() {}
  // the game that is passed in
  @Input() game: Game;
  // track which team is selected - either "blue" or "red"
  teamSelected = '';
  ngOnInit() {
    console.log(this.game);
  }

  // when a team is clicked
  onTeamClick(blueTeamClicked: boolean) {
    // toggle the team that is selected
    this.teamSelected = blueTeamClicked ? 'blue' : 'red';
  }
}
