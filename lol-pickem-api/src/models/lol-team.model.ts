import {Model, model, property} from '@loopback/repository';

@model()
export class LolTeam extends Model {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  teamId: number;

  @property({
    type: 'string',
    required: true,
  })
  win: string;

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

  @property({
    type: 'boolean',
    required: true,
  })
  firstInhibitor: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  firstBaron: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  firstDragon: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  firstRiftHerald: boolean;

  @property({
    type: 'number',
    required: true,
  })
  towerKills: number;

  @property({
    type: 'number',
    required: true,
  })
  inhibitorKills: number;

  @property({
    type: 'number',
    required: true,
  })
  baronKills: number;

  @property({
    type: 'number',
    required: true,
  })
  dragonKills: number;

  @property({
    type: 'number',
    required: true,
  })
  vilemawKills: number;

  @property({
    type: 'number',
    required: true,
  })
  riftHeraldKills: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  dominionVictoryScore: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  bans: object[];


  constructor(data?: Partial<LolTeam>) {
    super(data);
  }
}

export interface LolTeamRelations {
  // describe navigational properties here
}

export type LolTeamWithRelations = LolTeam & LolTeamRelations;
