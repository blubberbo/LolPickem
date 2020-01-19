import {Model, model, property} from '@loopback/repository';

@model()
export class LolParticipant extends Model {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  participantId: number;

  @property({
    type: 'number',
    required: true,
  })
  teamId: number;

  @property({
    type: 'number',
    required: true,
  })
  championId: number;

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
    type: 'object',
    required: true,
  })
  stats: object;

  @property({
    type: 'object',
    required: true,
  })
  timeline: object;


  constructor(data?: Partial<LolParticipant>) {
    super(data);
  }
}

export interface LolParticipantRelations {
  // describe navigational properties here
}

export type LolParticipantWithRelations = LolParticipant & LolParticipantRelations;
