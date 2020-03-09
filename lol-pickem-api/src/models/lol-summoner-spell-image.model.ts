import {Model, model, property} from '@loopback/repository';

@model()
export class LolSummonerSpellImage extends Model {
  @property({
    type: 'string',
  })
  full?: string;


  constructor(data?: Partial<LolSummonerSpellImage>) {
    super(data);
  }
}

export interface LolSummonerSpellImageRelations {
  // describe navigational properties here
}

export type LolSummonerSpellImageWithRelations = LolSummonerSpellImage & LolSummonerSpellImageRelations;
