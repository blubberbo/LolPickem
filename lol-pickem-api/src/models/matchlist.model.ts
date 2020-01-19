import {Model, model, property} from '@loopback/repository';
import {Game} from './game.model';

@model()
export class Matchlist extends Model {
  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  matches: Game[];

  @property({
    type: 'number',
    required: true,
  })
  startIndex: number;

  @property({
    type: 'number',
    required: true,
  })
  endIndex: number;

  @property({
    type: 'number',
    required: true,
  })
  totalGames: number;

  constructor(data?: Partial<Matchlist>) {
    super(data);
  }
}

export interface MatchlistRelations {
  // describe navigational properties here
}

export type MatchlistWithRelations = Matchlist & MatchlistRelations;
