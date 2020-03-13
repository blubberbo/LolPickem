import { Player } from '.';

export class Team {
  players: Player[];
  win: boolean;
  firstBlood: boolean;
  firstTower: boolean;
  constructor() {
    this.players = [];
  }
}
