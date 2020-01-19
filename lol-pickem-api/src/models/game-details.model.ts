import {Model, model, property} from '@loopback/repository';
import {Team} from '.';

@model()
export class GameDetails extends Model {
  @property({
    type: 'object',
    required: true,
  })
  BlueTeam: Team;

  @property({
    type: 'object',
    required: true,
  })
  RedTeam: Team;

  constructor(data?: Partial<GameDetails>) {
    super(data);
  }
}

export interface GameDetailsRelations {
  // describe navigational properties here
}

export type GameDetailsWithRelations = GameDetails & GameDetailsRelations;
