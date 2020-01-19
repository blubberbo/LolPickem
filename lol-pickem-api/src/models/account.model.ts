import {Model, model, property} from '@loopback/repository';

@model()
export class Account extends Model {
  @property({
    type: 'string',
    required: true,
  })
  leagueId: string;

  @property({
    type: 'string',
    required: true,
  })
  queueType: string;

  @property({
    type: 'string',
    required: true,
  })
  tier: string;

  @property({
    type: 'string',
    required: true,
  })
  rank: string;

  @property({
    type: 'string',
    required: true,
  })
  summonerId: string;

  @property({
    type: 'string',
    required: true,
  })
  summonerName: string;

  @property({
    type: 'number',
    required: true,
  })
  leaguePoints: string;

  @property({
    type: 'number',
    required: true,
  })
  wins: string;

  @property({
    type: 'number',
    required: true,
  })
  losses: string;

  @property({
    type: 'boolean',
    required: true,
  })
  veteran: string;

  @property({
    type: 'boolean',
    required: true,
  })
  freshBlood: string;

  @property({
    type: 'boolean',
    required: true,
  })
  hotStreak: string;

  @property({
    type: 'string',
    required: false,
  })
  accountId: string;

  constructor(data?: Partial<Account>) {
    let newData: Partial<Account> = {};
    newData.leagueId = data?.leagueId;
    newData.queueType = data?.queueType;
    newData.tier = data?.tier;
    newData.rank = data?.rank;
    newData.summonerId = data?.summonerId;
    newData.summonerName = data?.summonerName;
    newData.leaguePoints = data?.leaguePoints;
    newData.wins = data?.wins;
    newData.losses = data?.losses;
    newData.veteran = data?.veteran;
    newData.freshBlood = data?.freshBlood;
    newData.hotStreak = data?.hotStreak;
    super(newData);
  }
}

export interface AccountRelations {
  // describe navigational properties here
}

export type AccountWithRelations = Account & AccountRelations;
