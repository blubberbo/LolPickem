import { Model, model, property } from '@loopback/repository';

@model()
export class SummonerSpell extends Model {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  imageName?: string;

  @property({
    type: 'number',
  })
  spellId?: number;

  constructor(data?: Partial<SummonerSpell>) {
    super(data);
  }
}

export interface SummonerSpellRelations {
  // describe navigational properties here
}

export type SummonerSpellWithRelations = SummonerSpell & SummonerSpellRelations;
