import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../shared/models/player.model';
import { Constants } from '../../shared/constants';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pickem-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PickemPlayerComponent implements OnInit {
  // the Player that is passed in from the Team parent
  @Input() player: Player;
  // the align that is passed in from the Team parent (either 'left' or 'right')
  @Input() align = 'left';
  // track whether the champion image is loaded
  championImageLoaded = false;
  // track whether the spell 1 image is loaded
  spell1ImageLoaded = false;
  // track whether the spell 2 image is loaded
  spell2ImageLoaded = false;
  // store the constants object locally
  constants = new Constants();
  constructor() {}
  ngOnInit() {}
  /**
   * when the champion image has loaded
   */
  onChampionImageLoad() {
    // indicate that the champion image has loaded
    this.championImageLoaded = true;
  }
  /**
   * when the spell 1 image has loaded
   */
  onSpell1Load() {
    // indicate that the spell 1 image has loaded
    this.spell1ImageLoaded = true;
  }
  /**
   * when the spell 2 image has loaded
   */
  onSpell2Load() {
    // indicate that the spell 1 image has loaded
    this.spell2ImageLoaded = true;
  }
}
