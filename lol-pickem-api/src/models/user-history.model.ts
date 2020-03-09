import { Entity, model, property, DateType } from '@loopback/repository';
import { Game } from '.';

@model()
export class UserHistory extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: { dataType: 'ObjectID' },
  })
  id?: string;

  @property({
    type: 'object',
    required: true,
  })
  game: Game;

  @property({
    type: 'boolean',
    required: true,
  })
  guessedCorrectly: boolean;

  @property({
    type: 'date',
    required: false,
  })
  timestamp: Date;

  constructor(data?: Partial<UserHistory>) {
    super(data);
  }
}

export interface UserHistoryRelations {
  // describe navigational properties here
}

export type UserHistoryWithRelations = UserHistory & UserHistoryRelations;
