import {Model, model, property} from '@loopback/repository';

@model()
export class Champion extends Model {
  @property({
    type: 'string',
    required: true,
  })
  championName: string;

  @property({
    type: 'string',
    required: true,
  })
  championImageName: string;


  constructor(data?: Partial<Champion>) {
    super(data);
  }
}

export interface ChampionRelations {
  // describe navigational properties here
}

export type ChampionWithRelations = Champion & ChampionRelations;
