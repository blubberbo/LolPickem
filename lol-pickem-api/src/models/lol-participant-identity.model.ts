import {Model, model, property} from '@loopback/repository';
import {LolParticipantIdentityPlayer} from './lol-participant-identity-player.model';

@model()
export class LolParticipantIdentity extends Model {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  participantId: number;

  @property({
    type: 'object',
    required: true,
  })
  player: LolParticipantIdentityPlayer;

  constructor(data?: Partial<LolParticipantIdentity>) {
    super(data);
  }
}

export interface LolParticipantIdentityRelations {
  // describe navigational properties here
}

export type LolParticipantIdentityWithRelations = LolParticipantIdentity &
  LolParticipantIdentityRelations;
