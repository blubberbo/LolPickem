import { SummonerSpell } from './summoner-spell.model';
export class Player {
  summonerName: string;
  championId: number;
  championName: string;
  championSquareImageUrl: string;
  spell1: SummonerSpell;
  spell2: SummonerSpell;
  accountId: string;

  constructor() {
    this.spell1 = new SummonerSpell();
    this.spell2 = new SummonerSpell();
  }
}
