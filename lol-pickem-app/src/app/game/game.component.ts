import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../shared/models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor() {}
  @Input() game: Game;

  ngOnInit() {
    console.log(this.game);
  }
}
