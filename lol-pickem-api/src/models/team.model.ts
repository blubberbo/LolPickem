import {Model, model, property} from '@loopback/repository';
import {Player} from '.';

@model()
export class Team extends Model {
  @property({
    type: 'array',
    itemType: 'object',
    required: true,
    default: [],
  })
  players: Player[];

  @property({
    type: 'boolean',
    required: true,
  })
  win: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  firstBlood: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  firstTower: boolean;

  constructor(data?: Partial<Team>) {
    super(data);
    this.players = [];
  }
}

export interface TeamRelations {
  // describe navigational properties here
}

export type TeamWithRelations = Team & TeamRelations;
