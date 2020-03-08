import { SummonerSpell } from './summoner-spell.model';

export class Player {
  accountId: string;
  summonerName: string;
  championId: number;
  championName: string;
  championSquareImageUrl: string;
  spell1: SummonerSpell;
  spell2: SummonerSpell;
  constructor() {}
}
