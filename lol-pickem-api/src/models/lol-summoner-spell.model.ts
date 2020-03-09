import { Model, model, property } from '@loopback/repository';
import { LolSummonerSpellImage } from '.';

@model()
export class LolSummonerSpell extends Model {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
  })
  spellId?: number;

  @property({
    type: 'LolSummonerSpellImage',
  })
  image?: LolSummonerSpellImage;

  constructor(data?: Partial<LolSummonerSpell>) {
    super(data);
  }
}

export interface LolSummonerSpellRelations {
  // describe navigational properties here
}

export type LolSummonerSpellWithRelations = LolSummonerSpell &
  LolSummonerSpellRelations;
