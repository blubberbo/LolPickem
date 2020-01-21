import {Model, model, property} from '@loopback/repository';

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
    type: 'number',
    required: true,
  })
  spell1Id: number;

  @property({
    type: 'number',
    required: true,
  })
  spell2Id: number;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  accountId: string;

  constructor(data?: Partial<Player>) {
    super(data);
  }
}

export interface PlayerRelations {
  // describe navigational properties here
}

export type PlayerWithRelations = Player & PlayerRelations;
