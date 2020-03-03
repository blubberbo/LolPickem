import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../shared/models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  // the Player that is passed in from the Team parent
  @Input() player: Player;
  // the align that is passed in from the Team parent (either 'left' or 'right')
  @Input() align = 'left';
  // track whether the champion image is loaded
  championImageLoaded = false;
  constructor() {}
  ngOnInit() {}
  /**
   * when the champion image has loaded
   */
  onChampionImageLoad() {
    console.log('loaded');
    // indicate that the champion image has loaded
    this.championImageLoaded = true;
  }
}
