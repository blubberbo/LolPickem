import { Model, model, property } from '@loopback/repository';
import { SummonerSpell } from './summoner-spell.model';

@model()
export class Player extends Model {
  @property({
    type: 'string',
    required: true,
  })
  summonerName: string;

  @property({
    type: 'number',
    required: true,
  })
  championId: number;

  @property({
    type: 'string',
    required: false,
  })
  championName: string;

  @property({
    type: 'string',
    required: false,
  })
  championSquareImageUrl: string;

  @property({
    type: 'SummonerSpell',
    required: true,
  })
  spell1: SummonerSpell;

  @property({
    type: 'SummonerSpell',
    required: true,
  })
  spell2: SummonerSpell;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  accountId: string;

  constructor(data?: Partial<Player>) {
    super(data);
    this.spell1 = new SummonerSpell();
    this.spell2 = new SummonerSpell();
  }
}

export interface PlayerRelations {
  // describe navigational properties here
}

export type PlayerWithRelations = Player & PlayerRelations;
