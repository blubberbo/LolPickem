import {Model, model, property} from '@loopback/repository';

@model()
export class LolParticipantIdentityPlayer extends Model {
  @property({
    type: 'string',
    required: true,
  })
  platformId: string;

  @property({
    type: 'string',
    required: true,
  })
  accountId: string;

  @property({
    type: 'string',
    required: true,
  })
  summonerName: string;

  @property({
    type: 'string',
    required: true,
  })
  summonerId: string;

  @property({
    type: 'string',
    required: true,
  })
  currentPlatformId: string;

  @property({
    type: 'string',
    required: true,
  })
  currentAccountId: string;

  @property({
    type: 'string',
    required: true,
  })
  matchHistoryUri: string;

  @property({
    type: 'number',
    required: true,
  })
  profileIcon: number;


  constructor(data?: Partial<LolParticipantIdentityPlayer>) {
    super(data);
  }
}

export interface LolParticipantIdentityPlayerRelations {
  // describe navigational properties here
}

export type LolParticipantIdentityPlayerWithRelations = LolParticipantIdentityPlayer & LolParticipantIdentityPlayerRelations;
